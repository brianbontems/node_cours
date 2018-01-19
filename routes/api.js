/* Importer des composants de la route */

const express = require('express');
const router = express.Router();
const mySql = require('mysql');

/* Définition des routes */

router.get('/', (req, res) => {
    //Renvoyer le fichier index dans la réponse
    res.json( { content:`Hello API` } );
});

/* Configuer la connexion à la BDD */

const connection = mySql.createConnection({
  host     : 'localhost:8888',
  user     : 'root',
  password : 'root',
  database : 'todoes'
});


 /*
/*Exporter le module de route */

module.exports = router;