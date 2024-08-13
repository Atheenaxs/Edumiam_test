# Edumiam_test
# Interface de Gestion de Parcours de Formation

Ce projet est une interface simple pour la gestion des parcours de formation. Il se compose de deux vues principales : une vue Admin pour gérer les formations et une vue Learner pour s'inscrire aux formations.

## Fonctionnalités

- **Modèle CatalogueEntity** : Représente les formations avec des champs pour l'ID, le nom, le prix et la durée en jours. Inclut une méthode pour calculer le prix par jour.
- **Modèle Learner** : Représente les apprenants avec des champs pour l'ID, le prénom, le nom de famille et l'âge. Assure l'unicité basée sur le nom et l'âge.
- **Modèle CatalogueItem** : Représente les inscriptions aux formations, liant une formation et un apprenant, avec une méthode pour calculer la date de fin en fonction de la date de début et de la durée de la formation.
- **Interface Admin** : Permet aux administrateurs de créer et de gérer les formations.
- **Interface Learner** : Permet aux apprenants de voir les formations disponibles et de s'y inscrire.

## Installation

1. Clonez le repository :

    ```bash
    git clone <url-du-repository>
    cd <dossier-du-repository>
    ```

2. Installez les dépendances :

    ```bash
    npm install
    ```

3. Démarrez le serveur de développement :

    ```bash
    npm run dev
    ```

## Test

### Test Manuel

1. **Vue Admin** :
    - Accédez à `http://localhost:5000/admin`.
    - Créez une nouvelle formation et sauvegardez-la.
    - La formation doit apparaître sous le formulaire avec le prix par jour affiché.

2. **Vue Learner** :
    - Accédez à `http://localhost:5000/learner`.
    - Inscrivez-vous à une formation en sélectionnant une formation et en remplissant les informations de l'apprenant.
    - La formation doit apparaître sous le formulaire, et l'inscription doit persister après le rechargement de la page.

### Test de l'API avec Postman

    - **GET** `/api/catalogue-entities`
    - **POST** `/api/learners`
    - **POST** `/api/catalogue-items`

## Structure du Projet

- **/src**
  - **database** : Configuration de la connexion à la base de données.
  - **/models** : Modèles Mongoose.
  - **/routes** : Routes API.
  - **/views** : Vues HTML pour les interfaces admin et learner.
  - **app**
  - **server**
- **/public/css** : Fichiers CSS pour le style.



