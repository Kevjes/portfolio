// Script de vérification de la structure du portfolio
const fs = require('fs');
const path = require('path');

console.log('🔍 Vérification de la structure du portfolio...\n');

const errors = [];
const warnings = [];
const success = [];

// Vérifier les sections
const sections = ['navigation', 'hero', 'about', 'skills', 'experience', 'projects', 'contact', 'footer'];

sections.forEach(section => {
    const sectionPath = path.join(__dirname, 'sections', section);

    // Vérifier si le dossier existe
    if (!fs.existsSync(sectionPath)) {
        errors.push(`❌ Dossier manquant: sections/${section}`);
        return;
    }

    // Vérifier les fichiers HTML, CSS, JS
    ['html', 'css', 'js'].forEach(ext => {
        const filePath = path.join(sectionPath, `${section}.${ext}`);
        if (!fs.existsSync(filePath)) {
            errors.push(`❌ Fichier manquant: sections/${section}/${section}.${ext}`);
        } else {
            success.push(`✅ sections/${section}/${section}.${ext}`);
        }
    });
});

// Vérifier les fichiers globaux
const globalFiles = [
    'index.html',
    'assets/css/global.css',
    'assets/js/main.js'
];

globalFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) {
        errors.push(`❌ Fichier manquant: ${file}`);
    } else {
        success.push(`✅ ${file}`);
    }
});

// Vérifier index.html pour les références
const indexPath = path.join(__dirname, 'index.html');
if (fs.existsSync(indexPath)) {
    const indexContent = fs.readFileSync(indexPath, 'utf8');

    // Vérifier les CSS
    sections.forEach(section => {
        if (!indexContent.includes(`sections/${section}/${section}.css`)) {
            warnings.push(`⚠️ CSS manquant dans index.html: sections/${section}/${section}.css`);
        }
    });

    // Vérifier les JS
    sections.forEach(section => {
        if (!indexContent.includes(`sections/${section}/${section}.js`)) {
            warnings.push(`⚠️ JS manquant dans index.html: sections/${section}/${section}.js`);
        }
    });

    // Vérifier les IDs de section
    sections.forEach(section => {
        if (!indexContent.includes(`${section}-section`)) {
            warnings.push(`⚠️ ID de section manquant dans index.html: ${section}-section`);
        }
    });
}

// Afficher les résultats
console.log('📊 Résultats de la vérification:\n');

if (success.length > 0) {
    console.log(`✅ Fichiers trouvés (${success.length}):`);
    success.forEach(msg => console.log(`  ${msg}`));
    console.log('');
}

if (warnings.length > 0) {
    console.log(`⚠️ Avertissements (${warnings.length}):`);
    warnings.forEach(msg => console.log(`  ${msg}`));
    console.log('');
}

if (errors.length > 0) {
    console.log(`❌ Erreurs (${errors.length}):`);
    errors.forEach(msg => console.log(`  ${msg}`));
    console.log('');
    process.exit(1);
} else {
    console.log('✨ Aucune erreur détectée !');
    console.log('🚀 Le portfolio est prêt à être utilisé.\n');
    console.log('Pour lancer le serveur:');
    console.log('  python -m http.server 8000');
    console.log('Puis ouvrir: http://localhost:8000\n');
}
