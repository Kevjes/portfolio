#!/usr/bin/env node
/**
 * build.js — génère index.html et sitemap.xml
 *
 * Source de vérité : index.template.html + sections/*.html
 * Chaque `<!-- @include chemin/vers/fichier.html -->` est remplacé par le
 * contenu du fichier, avec les chemins relatifs `../../` réécrits pour la
 * racine du site. Résultat : tout le contenu est servi en HTML statique,
 * lisible par les robots, les scanners d'email et les IA — sans JavaScript.
 *
 * Usage :  node build.js
 * Après toute modification d'une section ou du template, relancer puis
 * committer index.html avec les sources.
 */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SITE_URL = 'https://kevintene.menosi.net'; // à changer avec le futur domaine

// ---------- index.html ----------
const templatePath = path.join(ROOT, 'index.template.html');
let html = fs.readFileSync(templatePath, 'utf8');

const includeRe = /<!--\s*@include\s+([^\s]+)\s*-->/g;
const included = [];

html = html.replace(includeRe, (_, relPath) => {
    const filePath = path.join(ROOT, relPath);
    if (!fs.existsSync(filePath)) {
        console.error(`✗ Section introuvable : ${relPath}`);
        process.exitCode = 1;
        return `<!-- MISSING: ${relPath} -->`;
    }
    let content = fs.readFileSync(filePath, 'utf8');
    // Les sections vivent dans sections/x/ ; une fois inlinées à la racine,
    // leurs chemins relatifs doivent pointer depuis la racine.
    content = content.replace(/(\b(?:href|src)=["'])\.\.\/\.\.\//g, '$1');
    included.push(relPath);
    return content;
});

const banner = '<!-- FICHIER GÉNÉRÉ par build.js — ne pas éditer directement.\n     Modifier index.template.html ou sections/*.html puis relancer : node build.js -->\n';
html = html.replace(/^(<!DOCTYPE html>\s*\n)/i, `$1${banner}`);

// ---------- cache-busting ----------
// Chaque build stampe les CSS/JS locaux avec ?v=<horodatage> : les visiteurs
// (et Kevin) reçoivent TOUJOURS la dernière version après un déploiement,
// sans Ctrl+Shift+R. Les URLs externes (fonts, CDN) ne sont pas touchées.
const V = Date.now().toString(36);
html = html.replace(/(href|src)="((?:assets|sections|js)\/[^"?]+\.(?:css|js))"/g,
    `$1="$2?v=${V}"`);
// Les scripts chargés dynamiquement par le loader (tableau de chemins)
html = html.replace(/'((?:assets|sections|js)\/[^'?]+\.js)'/g, `'$1?v=${V}'`);
console.log(`✓ cache-busting : ?v=${V}`);

fs.writeFileSync(path.join(ROOT, 'index.html'), html);
console.log(`✓ index.html généré (${included.length} sections inlinées, ${(html.length / 1024).toFixed(1)} Ko)`);

// ---------- sitemap.xml ----------
const today = new Date().toISOString().slice(0, 10);
const pages = [
    { loc: '/', priority: '1.0' },
    { loc: '/pages/mentions-legales.html', priority: '0.3' },
    { loc: '/pages/politique-confidentialite.html', priority: '0.3' },
    { loc: '/pages/cgv.html', priority: '0.3' },
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${SITE_URL}${p.loc}</loc>
    <lastmod>${today}</lastmod>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap);
console.log('✓ sitemap.xml généré');

// ---------- vérifications ----------
const textOnly = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ');
const wordCount = textOnly.split(/\s+/).filter(Boolean).length;
if (wordCount < 500) {
    console.error(`✗ Contenu statique trop faible : ${wordCount} mots`);
    process.exitCode = 1;
} else {
    console.log(`✓ ${wordCount} mots servis sans JavaScript`);
}
