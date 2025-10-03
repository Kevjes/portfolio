# Portfolio Kevin Tene - Structure Modulaire

## 📁 Structure du Projet

```
kevin-folio/
│
├── index-new.html              # Nouveau fichier HTML principal
├── index.html                  # Ancien fichier (à sauvegarder)
│
├── assets/
│   ├── css/
│   │   └── global.css         # Styles globaux (variables, reset, utilities)
│   └── js/
│       └── main.js            # JavaScript principal (utils, init)
│
├── sections/
│   ├── navigation/
│   │   ├── navigation.html    # Structure de la navigation
│   │   ├── navigation.css     # Styles de la navigation
│   │   └── navigation.js      # Fonctionnalités de navigation
│   │
│   ├── hero/
│   │   ├── hero.html          # Section d'accueil
│   │   ├── hero.css           # Styles hero (animations, parallax)
│   │   └── hero.js            # Effets hero (typing, particles)
│   │
│   ├── about/
│   │   ├── about.html         # Section à propos
│   │   ├── about.css          # Styles about (stats, cards)
│   │   └── about.js           # Animations about (counters)
│   │
│   ├── skills/
│   │   ├── skills.html        # Section compétences
│   │   ├── skills.css         # Styles skills (progress bars)
│   │   └── skills.js          # Animations skills (filters)
│   │
│   ├── experience/
│   │   ├── experience.html    # Section expérience
│   │   ├── experience.css     # Styles timeline
│   │   └── experience.js      # Animations timeline
│   │
│   ├── projects/
│   │   ├── projects.html      # Section projets
│   │   ├── projects.css       # Styles cards projets
│   │   └── projects.js        # Modal projets, filtres
│   │
│   ├── contact/
│   │   ├── contact.html       # Section contact
│   │   ├── contact.css        # Styles formulaire
│   │   └── contact.js         # Validation, envoi formulaire
│   │
│   └── footer/
│       ├── footer.html        # Pied de page
│       ├── footer.css         # Styles footer
│       └── footer.js          # Fonctionnalités footer
│
├── styles.css                 # Ancien fichier CSS (à sauvegarder)
└── script.js                  # Ancien fichier JS (à sauvegarder)
```

## 🎨 Avantages de cette Structure

### 1. **Maintenabilité**
- Chaque section est dans son propre dossier
- Modification d'une section sans affecter les autres
- Code organisé et facile à trouver

### 2. **Réutilisabilité**
- Sections facilement réutilisables dans d'autres projets
- Composants indépendants

### 3. **Collaboration**
- Plusieurs développeurs peuvent travailler sur différentes sections
- Moins de conflits Git

### 4. **Performance**
- Chargement modulaire des sections
- Possibilité de lazy loading
- CSS/JS spécifiques par section

### 5. **Créativité**
- Chaque section peut avoir son propre style
- Animations spécifiques sans interférer
- Thème cohérent via global.css

## 🚀 Utilisation

### Démarrage
1. Renommez `index.html` en `index-old.html` (sauvegarde)
2. Renommez `index-new.html` en `index.html`
3. Ouvrez `index.html` dans votre navigateur

### Modifier une Section
1. Naviguez vers `sections/[nom-section]/`
2. Modifiez le HTML, CSS ou JS correspondant
3. Les changements se reflètent automatiquement

### Ajouter une Nouvelle Section
1. Créez un nouveau dossier dans `sections/`
2. Ajoutez les fichiers `.html`, `.css`, `.js`
3. Importez dans `index.html`

## 🎯 Fonctionnalités par Section

### Navigation
- Menu responsive
- Indicateur de progression de scroll
- Highlight de section active
- Smooth scroll
- Toggle thème (optionnel)

### Hero
- Effet typing sur le rôle
- Particules animées
- Parallax background
- Image avec effet tilt 3D
- Scroll indicator animé

### About
- Compteurs animés
- Effet glow sur l'image
- Highlights avec animations
- Stats interactives
- Info cards avec hover effects

### Skills
- Progress bars animées
- Filtres par catégorie
- Animations staggered
- Hover effects sur les cartes
- Responsive grid

### Experience
- Timeline verticale animée
- Progress indicator de scroll
- Cartes avec effet 3D tilt
- Tags interactifs
- Parallax sur les items

### Projects
- Grille de cartes responsive
- Modal avec détails projet
- Filtres par catégorie
- Hover effects avancés
- Lazy loading images

### Contact
- Validation en temps réel
- Messages d'erreur personnalisés
- Animation de soumission
- Copy-to-clipboard pour contacts
- Auto-resize textarea

### Footer
- Stats animées
- Liens de navigation
- Social media avec hover effects
- Scroll to top button
- Copyright dynamique

## 🎨 Personnalisation

### Couleurs (global.css)
```css
:root {
    --gold: #c59764;
    --black: #0a0a0a;
    --dark-gray: #1a1a1a;
    /* Modifier ces variables pour changer le thème */
}
```

### Animations
Chaque section a ses propres animations dans son fichier CSS.
Modifiez les `@keyframes` pour personnaliser.

### Contenu
Le contenu se trouve dans les fichiers HTML de chaque section.

## 📱 Responsive Design

- Mobile First approach
- Breakpoints:
  - Mobile: < 576px
  - Tablet: < 768px
  - Desktop: < 968px
  - Large: < 1200px

## ⚡ Performance

- Lazy loading des images
- CSS modulaire
- JavaScript optimisé
- Intersection Observer pour animations
- Debounce/Throttle sur événements

## 🔧 Technologies Utilisées

- HTML5 sémantique
- CSS3 (Grid, Flexbox, Animations)
- JavaScript ES6+ (Vanilla)
- Font Awesome 6
- Google Fonts

## 📝 Bonnes Pratiques

1. **Toujours tester** après modification
2. **Commenter** le code complexe
3. **Respecter** la structure des dossiers
4. **Optimiser** les images avant ajout
5. **Valider** le HTML/CSS

## 🐛 Débogage

Si une section ne s'affiche pas :
1. Vérifiez la console du navigateur
2. Vérifiez les chemins des fichiers
3. Vérifiez que tous les fichiers existent
4. Vérifiez les erreurs JavaScript

## 📞 Support

Pour toute question ou amélioration :
- Email: kevinjessi10@gmail.com
- GitHub: @kevintene

## 📄 Licence

© 2025 Kevin Tene. Tous droits réservés.

---

**Note**: Cette structure est conçue pour être évolutive. N'hésitez pas à ajouter de nouvelles sections ou fonctionnalités selon vos besoins !
