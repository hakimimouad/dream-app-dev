# Dream App - Page de Bienvenue

## Description de l'Application

L'objectif de ce mini-projet est de développer une page de bienvenue responsive pour l'application Dream App. Cette page d'accueil doit être conçue pour s'adapter à la fois aux écrans de bureau (PC) et aux appareils mobiles.

### Fonctionnalités Clés :

1. **Conception Responsive** :
   - L'interface utilisateur doit être conçue de manière à être compatible avec les écrans de bureau et les appareils mobiles, assurant ainsi une expérience utilisateur optimale sur tous les supports.

2. **Formulaire de Validation** :
   - Sur l'interface PC, le formulaire doit être valide lors du clic sur le bouton.
   - Le formulaire doit comporter les champs nécessaires et assurer une validation correcte des données saisies par l'utilisateur.

4. **Appel Asynchrone à une API** :
   - Lorsque l'utilisateur clique sur le bouton, un appel asynchrone doit être effectué vers l'endpoint `https://api.db-ip.com/v2/free/self`.
   - La réponse de cet appel sera utilisée pour évaluer la somme des nombres de l'IP.
   - Si la somme des nombres de l'IP est supérieure à 100, une alerte "OK" doit être affichée.
   - Si la somme des nombres de l'IP est inférieure ou égale à 100, une alerte "KO" doit être affichée.

### Public Cible :

Ce mini-projet cible les développeurs front-end et les concepteurs d'interfaces utilisateur souhaitant améliorer leurs compétences en matière de développement d'applications web responsives. Il est également utile pour ceux qui veulent comprendre le processus d'intégration d'appels API asynchrones dans leurs applications.

## Captures d'écran

![image](https://github.com/hakimimouad/dream-app-dev/assets/156900047/b2085f98-3754-429e-9fe6-82aa36252198)
![image](https://github.com/hakimimouad/dream-app-dev/assets/156900047/b84b26ad-1970-46d7-99a8-c316a1b0a329)

## Installation et Exécution

### Accéder à l'Application Hébergée

L'application est hébergée sur Firebase Hosting à l'adresse suivante : http://fir-dream-inventiv.web.app.

### Exécuter Localement

1. **Cloner le dépôt Git :**
   ```bash
   git clone [URL_DU_REPO]

2. **Accéder au répertoire de l'application :**
   ```bash
   cd [NOM_DU_REPOTOIRE]
   
3. **Installer les dépendances avec npm :**
   ```bash
   npm install

4. **Démarrer l'application en mode de développement :**
   ```bash
   ionic serve
   ```
   Accédez à l'application dans votre navigateur en vous rendant à l'adresse http://localhost:8100.

   ### Tester l'Application sur un Appareil Mobile

Si vous souhaitez tester l'application sur votre appareil mobile, vous pouvez suivre ces étapes :

1. **Installer l'Extension Ionic sur Visual Studio Code** :
   - Si vous utilisez Visual Studio Code comme environnement de développement, vous pouvez installer l'extension Ionic pour simplifier le processus de développement et de test sur appareil mobile.

2. **Installer Nexus sur Votre Téléphone** :
   - Installez l'application Nexus sur votre téléphone Android depuis le Google Play Store. Nexus est une application qui vous permet de tester et de prévisualiser les applications Ionic sur votre appareil mobile en temps réel.

3. **Connexion au Même Réseau** :
   - Assurez-vous que votre téléphone est connecté au même réseau Wi-Fi que votre ordinateur.

4. **Lancer l'Application depuis Visual Studio Code** :
   - À l'aide de l'extension Ionic sur Visual Studio Code, lancez l'application sur votre ordinateur. L'application sera automatiquement accessible sur votre téléphone via Nexus.

5. **Tester l'Application** :
   - Ouvrez l'application sur votre téléphone et testez-la pour vous assurer qu'elle fonctionne correctement sur un appareil mobile.

Cela vous permettra de tester et de prévisualiser facilement l'application Dream App sur votre propre appareil mobile pendant le processus de développement.





   
