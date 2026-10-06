// ========================================
// DONNEES DES PRODUITS
// ========================================

const produits = [
    {
        id: "article-01",
        nom: "Harnais ergonomique anti-traction",
        prix: 15000,
        categorie: "Promenade",
        image: "images/article-01.jpeg",
        description: "Harnais confortable conçu pour mieux répartir la pression lors des promenades et limiter les tiraillements."
    },
    {
        id: "article-02",
        nom: "Laisse multi position/mains libre",
        prix: 10000,
        categorie: "Promenade",
        image: "images/article-02.jpeg",
        description: "Laisse polyvalente permettant plusieurs positions d’utilisation pour accompagner les promenades quotidiennes."
    },
    {
        id: "article-03",
        nom: "Collier ajustable confort",
        prix: 7500,
        categorie: "Promenade",
        image: "images/article-03.jpeg",
        description: "Collier réglable et confortable, adapté aux promenades quotidiennes et facile à ajuster."
    },
    {
        id: "article-04",
        nom: "Gamelle anti-glouton",
        prix: 8000,
        categorie: "Alimentation",
        image: "images/article-04.jpeg",
        description: "Gamelle conçue avec des reliefs pour ralentir la prise alimentaire du chien pendant ses repas."
    },
    {
        id: "article-05",
        nom: "Jouet corde résistante",
        prix: 5000,
        categorie: "Jouets",
        image: "images/article-05.jpeg",
        description: "Jouet en corde destiné aux moments de jeu et aux activités de traction avec votre chien."
    },
    {
        id: "article-06",
        nom: "Coussin douillet pour chien",
        prix: 12000,
        categorie: "Confort",
        image: "images/article-06.jpeg",
        description: "Coussin confortable offrant au chien un espace douillet pour se reposer à la maison."
    }
];


// ========================================
// ELEMENTS HTML
// ========================================

const grilleProduits = document.getElementById("grille-produits");
const ficheProduit = document.getElementById("fiche-produit");


// ========================================
// ELEMENTS DE LA FENETRE DE DETAILS
// ========================================

const titreFicheProduit = document.getElementById("fiche-produit-titre");

const contenuFicheProduit = ficheProduit.querySelector("div");

const boutonFermerFiche = ficheProduit.querySelector(
    'button[type="button"]:last-child'
);

const boutonAjouterFiche = ficheProduit.querySelector(
    'button[type="button"]:first-of-type'
);


// ========================================
// AFFICHAGE DU PRIX
// ========================================

function formaterPrix(prix) {
    return `${prix.toLocaleString("fr-FR")} FCFA`;
}


// ========================================
// OUVRIR LES DETAILS D'UN PRODUIT
// ========================================

function afficherDetailsProduit(produit) {
    titreFicheProduit.textContent = produit.nom;

    contenuFicheProduit.innerHTML = `
        <img
            src="${produit.image}"
            alt="${produit.nom}"
        >

        <h3>${produit.nom}</h3>

        <p>Catégorie : ${produit.categorie}</p>

        <p>${formaterPrix(produit.prix)}</p>

        <p>${produit.description}</p>
    `;

    boutonAjouterFiche.disabled = true;

    ficheProduit.showModal();
}


// ========================================
// CREATION D'UNE CARTE PRODUIT
// ========================================

function creerCarteProduit(produit) {
    const article = document.createElement("article");

    const image = document.createElement("img");
    image.src = produit.image;
    image.alt = produit.nom;

    const titre = document.createElement("h3");
    titre.textContent = produit.nom;

    const prix = document.createElement("p");
    prix.textContent = formaterPrix(produit.prix);

    const boutonDetails = document.createElement("button");
    boutonDetails.type = "button";
    boutonDetails.textContent = "Voir les détails";

    const boutonAjouter = document.createElement("button");
    boutonAjouter.type = "button";
    boutonAjouter.textContent = "Ajouter au panier";
    boutonAjouter.disabled = true;

    boutonDetails.addEventListener("click", function () {
        afficherDetailsProduit(produit);
    });

    article.appendChild(image);
    article.appendChild(titre);
    article.appendChild(prix);
    article.appendChild(boutonDetails);
    article.appendChild(boutonAjouter);

    return article;
}


// ========================================
// AFFICHER LES SIX PRODUITS
// ========================================

grilleProduits.innerHTML = "";

produits.forEach(function (produit) {
    const carte = creerCarteProduit(produit);
    grilleProduits.appendChild(carte);
});


// ========================================
// FERMER LA FENETRE DE DETAILS
// ========================================

boutonFermerFiche.addEventListener("click", function () {
    ficheProduit.close();
});