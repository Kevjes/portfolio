# Dashboard Admin - Portfolio Kevin Tene

## 📋 Description

Dashboard d'administration pour gérer dynamiquement le contenu du portfolio via Firebase Firestore.

## 🚀 Accès

**URL:** `http://localhost:8000/admin/login.html`

## 🔐 Première connexion

Avant de pouvoir vous connecter, vous devez créer un utilisateur dans Firebase Authentication :

1. Allez sur [Firebase Console](https://console.firebase.google.com/)
2. Sélectionnez votre projet: `kevin-portfolio-ff759`
3. Dans le menu, cliquez sur **Authentication**
4. Cliquez sur l'onglet **Users**
5. Cliquez sur **Add user**
6. Entrez votre email et mot de passe
7. Cliquez sur **Add user**

## 📁 Structure

```
admin/
├── login.html          # Page de connexion
├── index.html          # Dashboard principal
├── projects.html       # Gestion des projets
├── skills.html         # Gestion des compétences
├── experience.html     # Gestion des expériences
├── css/
│   ├── login.css       # Styles de la page de login
│   └── dashboard.css   # Styles du dashboard
└── js/
    └── firebase-config.js  # Configuration Firebase
```

## 🎨 Fonctionnalités

### 📊 Dashboard
- Vue d'ensemble des statistiques
- Compteurs de projets, compétences et expériences
- Liste des projets récents

### 📁 Gestion des Projets
- Ajouter/Modifier/Supprimer des projets
- Champs: Titre, Description, Image, Catégorie, Tags, Liens

### 💻 Gestion des Compétences
- Ajouter/Modifier/Supprimer des compétences
- Champs: Nom, Catégorie, Niveau (0-100%), Icône

### 💼 Gestion des Expériences
- Ajouter/Modifier/Supprimer des expériences
- Champs: Titre, Entreprise, Période, Description, Technologies

## 🔄 Synchronisation

Le portfolio se met à jour automatiquement avec les données de Firestore :
- Les projets sont chargés depuis la collection `projects`
- Les compétences depuis la collection `skills`
- Les expériences depuis la collection `experiences`

## 🔒 Sécurité

⚠️ **Important** : Configurez les règles de sécurité Firestore :

1. Allez dans **Firestore Database > Rules**
2. Remplacez les règles par :

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Lecture publique, écriture authentifiée
    match /{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## 🎨 Design

- Couleur principale: **Bleu** (#2563eb)
- Design simple et épuré
- Interface responsive
- Pas d'animations complexes

## 📝 Notes

- Assurez-vous que Firebase est bien configuré
- Les données sont stockées dans Firestore
- Le portfolio charge automatiquement les données depuis Firestore
