# Guide d'utilisation - Dashboard Admin Portfolio

## 📋 Vue d'ensemble

Ce système permet de gérer dynamiquement toutes les données de votre portfolio via un dashboard admin et Firebase Firestore.

## 🚀 Première utilisation

### Étape 1 : Migration des données

1. Accédez à `admin/migrate-data.html` dans votre navigateur
2. Cliquez sur "Démarrer la migration"
3. Attendez que toutes les données soient migrées vers Firestore
4. Une fois terminé, vous serez redirigé vers le dashboard

**Important** : Cette étape n'est à faire qu'une seule fois pour migrer les données statiques vers Firestore.

### Étape 2 : Connexion au dashboard

1. Allez sur `admin/login.html`
2. Connectez-vous avec vos identifiants Firebase
3. Vous serez redirigé vers le dashboard principal

## 📊 Structure des collections Firestore

### Collection `projects`
```javascript
{
  title: "Nom du projet",
  description: "Description détaillée",
  image: "URL de l'image",
  category: ["mobile", "services"], // Array
  tags: ["Flutter", "Firebase"], // Array
  links: [
    { type: "playstore", url: "https://..." },
    { type: "appstore", url: "https://..." }
  ],
  order: 1, // Ordre d'affichage
  featured: true, // Projet en vedette
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### Collection `skills`
```javascript
{
  category: "mobile",
  title: "Mobile",
  icon: "fa-mobile-alt",
  skills: [
    { name: "Flutter", level: 95 },
    { name: "Dart", level: 90 }
  ],
  order: 1,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### Collection `experiences`
```javascript
{
  title: "Développeur Full-stack",
  company: "KIMIA TECHNOLOGIES",
  period: "Août 2025 - Présent",
  description: "Description du poste",
  tasks: [
    "Tâche 1",
    "Tâche 2"
  ],
  tags: ["Flutter", "React", "Node.js"],
  order: 1,
  current: true, // Poste actuel
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### Collection `settings`
```javascript
{
  profile: {
    name: "Kevin Tene Landry",
    email: "email@example.com",
    phone: "+237 6XX XX XX XX",
    bio: "Développeur Fullstack..."
  },
  site: {
    title: "Titre du site",
    description: "Description",
    contactEmail: "email@example.com"
  },
  social: {
    linkedin: "URL",
    github: "URL",
    twitter: "URL",
    portfolio: "URL"
  }
}
```

## 🎨 Gestion des modules

### 1. Gestion des Projets (`admin/projects.html`)

**Ajouter un projet :**
1. Cliquez sur "Ajouter un projet"
2. Remplissez tous les champs requis
3. Sélectionnez les catégories (mobile, web, backend, etc.)
4. Ajoutez les tags (technologies utilisées)
5. Ajoutez les liens (Play Store, App Store, GitHub, Site web)
6. Définissez l'ordre d'affichage
7. Cliquez sur "Enregistrer"

**Modifier un projet :**
- Cliquez sur l'icône d'édition (crayon)
- Modifiez les champs souhaités
- Enregistrez

**Supprimer un projet :**
- Cliquez sur l'icône de suppression (poubelle)
- Confirmez la suppression

### 2. Gestion des Compétences (`admin/skills.html`)

**Ajouter une catégorie :**
1. Cliquez sur "Ajouter une catégorie"
2. Remplissez le nom de la catégorie (ex: "Mobile")
3. Choisissez le slug (identifiant) (ex: "mobile")
4. Sélectionnez une icône Font Awesome (ex: "fa-mobile-alt")
5. Ajoutez des compétences avec leur niveau (0-100)
6. Définissez l'ordre d'affichage
7. Enregistrez

**Ajouter une compétence à une catégorie :**
- Cliquez sur "Ajouter une compétence"
- Entrez le nom et le niveau (pourcentage)

### 3. Gestion des Expériences (`admin/experience.html`)

**Ajouter une expérience :**
1. Cliquez sur "Ajouter une expérience"
2. Remplissez le titre du poste
3. Nom de l'entreprise
4. Période (ex: "Janvier 2023 - Présent")
5. Description du poste
6. Ajoutez les tâches/réalisations
7. Ajoutez les technologies utilisées (tags)
8. Cochez "Poste actuel" si applicable
9. Définissez l'ordre d'affichage
10. Enregistrez

### 4. Paramètres (`admin/settings.html`)

**Sections disponibles :**

1. **Profil**
   - Nom complet
   - Email
   - Téléphone
   - Bio

2. **Configuration du site**
   - Titre du site
   - Description
   - Email de contact

3. **Réseaux sociaux**
   - LinkedIn
   - GitHub
   - Twitter
   - Site Portfolio

4. **Gestion des données**
   - **Sauvegarder** : Créer une backup JSON de toutes les données
   - **Restaurer** : Restaurer depuis une sauvegarde
   - **Réinitialiser** : Supprimer toutes les données (⚠️ Irréversible)

## 🔄 Synchronisation automatique

Le site principal (`index.html`) charge automatiquement les données depuis Firestore :

- Les modifications effectuées dans le dashboard sont **immédiatement visibles** sur le site
- Aucune action manuelle requise
- Le système utilise un fallback sur le contenu statique en cas d'erreur

## 💾 Sauvegarde et restauration

### Créer une sauvegarde

1. Allez dans Paramètres
2. Section "Gestion des données"
3. Cliquez sur "Sauvegarder"
4. Un fichier JSON sera téléchargé avec toutes vos données

### Restaurer une sauvegarde

1. Allez dans Paramètres
2. Section "Gestion des données"
3. Cliquez sur "Restaurer"
4. Sélectionnez le fichier JSON de sauvegarde
5. Confirmez la restauration

**⚠️ Attention** : La restauration remplace toutes les données actuelles.

## 🔐 Sécurité

### Règles Firestore recommandées

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permettre la lecture publique pour le portfolio
    match /{document=**} {
      allow read: if true;
    }

    // Écriture uniquement pour les utilisateurs authentifiés
    match /projects/{project} {
      allow write: if request.auth != null;
    }

    match /skills/{skill} {
      allow write: if request.auth != null;
    }

    match /experiences/{experience} {
      allow write: if request.auth != null;
    }

    match /settings/{setting} {
      allow write: if request.auth != null;
    }
  }
}
```

### Changer le mot de passe

1. Allez dans Paramètres
2. Section "Sécurité"
3. Entrez votre mot de passe actuel
4. Entrez le nouveau mot de passe (min. 6 caractères)
5. Confirmez le nouveau mot de passe
6. Cliquez sur "Changer le mot de passe"

## 📱 Responsive

Le dashboard est optimisé pour :
- Desktop (écrans larges)
- Tablettes
- Mobiles

## 🐛 Dépannage

### Les données ne s'affichent pas

1. Vérifiez que la migration a été effectuée (`admin/migrate-data.html`)
2. Vérifiez la console du navigateur pour les erreurs
3. Vérifiez les règles Firestore
4. Vérifiez votre connexion internet

### Erreur de connexion

1. Vérifiez vos identifiants
2. Vérifiez que Firebase Auth est activé
3. Vérifiez la configuration Firebase dans `firebase-config.js`

### Les modifications ne sont pas visibles

1. Actualisez le cache du navigateur (Ctrl+Shift+R)
2. Vérifiez que les données ont bien été enregistrées dans Firestore
3. Consultez la console pour les erreurs JavaScript

## 📞 Support

Pour toute question ou problème, vérifiez :
1. La console du navigateur (F12)
2. Les logs de Firestore dans la console Firebase
3. Les règles de sécurité Firestore

## 🎯 Bonnes pratiques

1. **Sauvegardez régulièrement** vos données
2. **Testez toujours** dans un environnement de développement avant la production
3. **Optimisez les images** avant de les ajouter (compression, taille appropriée)
4. **Utilisez des URLs HTTPS** pour toutes les ressources externes
5. **Maintenez l'ordre** des éléments pour une navigation cohérente

## 🚀 Prochaines étapes

Une fois le système configuré, vous pouvez :
- Ajouter de nouveaux projets au fil du temps
- Mettre à jour vos compétences
- Ajouter de nouvelles expériences
- Personnaliser les paramètres du site

Le système est maintenant opérationnel et prêt à l'emploi !
