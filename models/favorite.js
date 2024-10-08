const mongoose = require('mongoose');

// Définir le schéma "favorite"
const favoriteSchema = new mongoose.Schema({
    favorite_usersid: {
        type: mongoose.Schema.Types.ObjectId,  // Référence vers un utilisateur
        ref: 'User',  // Référence à la collection des utilisateurs
        required: true
    },
    favorite_productsid: {
        type: mongoose.Schema.Types.ObjectId,  // Référence vers un produit
        ref: 'Product',  // Référence à la collection des produits
        required: true
    }
}, {
    timestamps: true  // Activer les timestamps pour createdAt et updatedAt
});

// Créer le modèle à partir du schéma
const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
