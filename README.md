# Backend - Application de Gestion des Projets

Ce dossier contient le backend de l'application de gestion des projets. Le backend est développé en **Node.js**, **Express**, et utilise **Sequelize** pour interagir avec une base de données **MySQL**.

## Prérequis

- Node.js (version 14 ou supérieure)
- MySQL

## Installation

1. Clonez le repository :

   ```bash
   https://github.com/DarkZangetsu/Task_manager_Backend_Nodejs.git
2.Naviguez dans le dossier du backend :

   ```bash
  cd Task_Manager_Vuejs3_Nodejs/backend
   ```
3.Installez les dépendances :

   ```bash
     npm install

   ```
4.Configurez la base de données :

  -Créez une base de données MySQL.

  -Renommez le fichier .env.example en .env et modifiez-le avec vos informations de base de données :
  
        DB_HOST=localhost
        DB_USER=root
        DB_PASSWORD=yourpassword
        DB_NAME=task_manager
        JWT_SECRET=your_jwt_secret

5.Synchronisez les modèles avec la base de données :

   ```bash
  -npm run migrate
  ```

6.Démarrez le serveur :

   ```bash
  nodemon start
   ```
Le serveur sera disponible à l'adresse http://localhost:3000.

Documentation de l'API
Les endpoints principaux de l'API incluent :

  -POST /api/users/register : Enregistrer un nouvel utilisateur.
  -POST /api/users/login : Authentifier un utilisateur.
  -GET /api/tasks : Récupérer toutes les tâches.
  -POST /api/tasks : Créer une nouvelle tâche.
  -PUT /api/tasks/:id : Mettre à jour une tâche.
  -DELETE /api/tasks/:id : Supprimer une tâche.
  -GET /api/users : Récupérer la liste de tous les utilisateurs.
  -GET /api/users/:id : Récupérer les détails d'un utilisateur spécifique par son ID.
  -PUT /api/users/:id : Mettre à jour les informations d'un utilisateur existant par son ID.
  -DELETE /api/users/:id : Supprimer un utilisateur par son ID.
