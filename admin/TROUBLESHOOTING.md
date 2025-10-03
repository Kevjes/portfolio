# 🔧 Résolution des problèmes - Dashboard Admin

## ❌ Erreur : "firebase.auth is not a function"

### Cause
Le SDK Firebase Auth n'est pas chargé correctement.

### Solution
Assurez-vous que tous vos fichiers HTML admin incluent les 3 SDKs Firebase dans cet ordre :

```html
<!-- Firebase SDKs - ORDRE IMPORTANT -->
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore-compat.js"></script>

<!-- Puis votre configuration -->
<script src="js/firebase-config.js"></script>
```

### Fichiers concernés
Vérifiez ces fichiers :
- ✅ `admin/index.html`
- ✅ `admin/login.html`
- ✅ `admin/projects.html`
- ✅ `admin/skills.html`
- ✅ `admin/experience.html`
- ✅ `admin/settings.html`
- ✅ `admin/migrate-data.html`

---

## ❌ Erreur : "db is not defined"

### Cause
La variable `db` n'est pas accessible globalement.

### Solution rapide pour `migrate-data.html`
Le fichier a été corrigé pour initialiser Firebase en inline :

```javascript
<script>
    const firebaseConfig = { /* ... */ };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const db = firebase.firestore();
</script>
```

---

## ❌ Erreur : "Failed to load projects"

### Causes possibles
1. Firestore n'a pas été initialisé
2. Les données n'ont pas été migrées
3. Problème de règles de sécurité Firestore

### Solutions

**1. Tester la connexion Firebase**
Accédez à `admin/test-firebase.html` pour vérifier :
- ✅ Firebase SDK chargé
- ✅ Firebase Auth disponible
- ✅ Firebase Firestore disponible
- ✅ Connexion à Firestore réussie

**2. Migrer les données**
Si aucune donnée n'apparaît :
1. Allez sur `admin/migrate-data.html`
2. Cliquez sur "Démarrer la migration"
3. Attendez la fin de la migration

**3. Vérifier les règles Firestore**
Dans la console Firebase > Firestore > Règles :

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Lecture publique pour le portfolio
    match /{document=**} {
      allow read: if true;
    }

    // Écriture pour utilisateurs authentifiés
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

---

## ❌ Erreur : "Permission denied" lors de la création

### Cause
Vous n'êtes pas authentifié ou les règles Firestore bloquent l'accès.

### Solution
1. Vérifiez que vous êtes connecté : `admin/login.html`
2. Vérifiez les règles Firestore (voir ci-dessus)
3. Vérifiez que Firebase Authentication est activé dans la console Firebase

---

## ❌ Les modifications ne s'affichent pas sur le site

### Solutions

**1. Vider le cache**
- Chrome/Edge : `Ctrl + Shift + R`
- Firefox : `Ctrl + F5`
- Safari : `Cmd + Option + R`

**2. Vérifier la console**
Ouvrez les outils de développement (F12) et regardez :
- Console : pour les erreurs JavaScript
- Network : pour voir si les requêtes Firestore fonctionnent

**3. Vérifier Firestore**
Allez dans Firebase Console > Firestore > Data
- Vérifiez que vos modifications sont bien enregistrées
- Vérifiez les timestamps `updatedAt`

---

## 🔍 Mode debug

### Activer les logs Firebase
Ajoutez ceci dans votre console JavaScript (F12) :

```javascript
firebase.firestore.setLogLevel('debug');
```

### Vérifier l'état d'authentification
```javascript
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('Utilisateur connecté:', user.email);
  } else {
    console.log('Aucun utilisateur connecté');
  }
});
```

### Tester une requête Firestore
```javascript
const db = firebase.firestore();
db.collection('projects').get()
  .then(snapshot => {
    console.log('Nombre de projets:', snapshot.size);
    snapshot.forEach(doc => {
      console.log(doc.id, doc.data());
    });
  })
  .catch(error => {
    console.error('Erreur:', error);
  });
```

---

## 🚑 Procédure de récupération d'urgence

Si rien ne fonctionne :

1. **Sauvegardez vos données** (si possible)
   - Allez dans `admin/settings.html`
   - Section "Gestion des données"
   - Cliquez sur "Sauvegarder"

2. **Vérifiez Firebase**
   - Console Firebase : https://console.firebase.google.com
   - Vérifiez que le projet existe
   - Vérifiez que Firestore est activé

3. **Réinitialisez Firebase localement**
   ```javascript
   // Dans la console (F12)
   firebase.app().delete().then(() => {
     location.reload();
   });
   ```

4. **Re-migrez les données**
   - Accédez à `admin/migrate-data.html`
   - Lancez la migration

---

## 📞 Checklist de dépannage

Avant de demander de l'aide, vérifiez :

- [ ] Les 3 SDKs Firebase sont chargés (App, Auth, Firestore)
- [ ] L'ordre de chargement des scripts est correct
- [ ] Firebase est bien initialisé (`firebase.apps.length > 0`)
- [ ] Vous êtes connecté (vérifiez `admin/login.html`)
- [ ] Les données ont été migrées (`admin/migrate-data.html`)
- [ ] Les règles Firestore autorisent la lecture publique
- [ ] Firebase Authentication est activé dans la console
- [ ] Le cache du navigateur a été vidé
- [ ] La console ne montre pas d'erreurs JavaScript
- [ ] Le test de connexion passe (`admin/test-firebase.html`)

---

## 🔗 Liens utiles

- **Console Firebase** : https://console.firebase.google.com
- **Documentation Firestore** : https://firebase.google.com/docs/firestore
- **Test de connexion** : `admin/test-firebase.html`
- **Migration des données** : `admin/migrate-data.html`

---

## 💡 Conseils

1. **Toujours tester dans un navigateur moderne** (Chrome, Firefox, Edge récent)
2. **Utilisez la console développeur** (F12) pour diagnostiquer
3. **Sauvegardez régulièrement** vos données
4. **Ne modifiez pas directement dans Firestore** si vous débutez
5. **Testez d'abord sur une collection de test** avant la production
