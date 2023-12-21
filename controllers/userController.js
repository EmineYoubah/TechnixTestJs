const express =require("express");
const User = require('../models/user');
require('../config/cennect');
const app = express();
app.use(express.json());


exports.userController =async (req, res)=>{
    try {
        users = await User.find();
        res.send(users);
        } catch (error) { res.send(error)
        }
};

// Écrivez une requête MongoDB pour trouver tous les documents
//  dans une collection où le 
//  champ "statut" est défini sur "actif".

// reponce :

exports.userControllerALL = async (req, res)=>{
    try {
    users = await User.find({statut: 'Actif'});
    res.send(users);
    } catch (error) { res.send(error)
    }
}
