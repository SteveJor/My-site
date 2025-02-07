// Declaration des variables
const main_container = document.querySelector("#main-container");
const mot_accueil = document.querySelector("#accueil div"),
    header = document.querySelector("header"),
    nav = document.querySelector("header nav"),
    bars = document.querySelector("header span"),
    parcoursParts = document.querySelectorAll(".parcoursParts"),
    sectionItems = document.querySelectorAll(".item"),
    aProposPresentation = document.querySelector("#presentation"),
    aPropostechnologie = document.querySelector("#Technologie"),
    contactSectionInfoPart = document.querySelector("#infoPart"),
    contactSectionForm = document.querySelector("#formContact"),
    toUpButton = document.querySelector("#toUpButton");

// Apparition progressive du conteneur
setInterval(() => {
    main_container.style.visibility = "visible";
    main_container.style.opacity = 1;
}, 50);

// Apparition progressive du message d'accueil
setInterval(() => {
    mot_accueil.style.visibility = "visible";
    mot_accueil.style.opacity = 1;
    mot_accueil.style.top = "300px";
}, 1000);

// Ajout d'une navigation fluide pour les liens
document.querySelectorAll('a').forEach(element => {
    element.addEventListener('click', function(e) {
        e.preventDefault(); // Empêche le comportement par défaut des liens
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth",
            block: 'start'
        });
        // Change la couleur du lien actif et réinitialise les autres
        element.style.color = "rgb(255, 168, 109)";
        document.querySelectorAll('a').forEach(elt => {
            if (elt != element) {
                elt.style.color = "white";
            }
        });
    });
});

// Affichage des sections lorsque l'utilisateur défile vers le celles-ci
window.addEventListener('scroll', () => {
    if(window.scrollY > 700 ){
        // Sous section presentation de a propos
        aPropostechnologie.style.visibility="visible";
        aPropostechnologie.style.opacity=1;
        aPropostechnologie.style.marginTop="50px"

        // Sous section technologies de a propos
        aProposPresentation.style.visibility="visible";
        aProposPresentation.style.opacity=1;
        aProposPresentation.style.marginTop=0
    }
    if(window.scrollY > 1700 ){
        // Affichage section parcours
        parcoursParts.forEach(part => {
            part.style.visibility="visible";
            part.style.opacity=1;
            part.style.marginTop=0
        });
    }
    if(window.scrollY > 2900 ){
        // Affichage section services
        sectionItems.forEach(item => {
            item.style.visibility="visible";
            item.style.opacity=1;
            item.style.marginTop=0
        });
    }
    if(window.scrollY > 3680 ){
        // Affichage section contact
        contactSectionForm.style.visibility="visible";
        contactSectionForm.style.opacity=1;
        contactSectionForm.style.marginTop=0

        contactSectionInfoPart.style.visibility="visible";
        contactSectionInfoPart.style.opacity=1;
        contactSectionInfoPart.style.marginTop=0
    }
    if (window.scrollY > header.scrollTop + 250) {
        toUpButton.style.opacity = 1;
        toUpButton.style.visibility = "visible";
    }
     else {
        toUpButton.style.opacity = 0;
        toUpButton.style.visibility = "hidden";
    }

});

// Gestion de l'ouverture et de la fermeture du menu de navigation via le bouton bars
bars.addEventListener("click", () => {
    if (nav.style.display != "flex") {
        nav.style.visibility = "visible";
        nav.style.opacity = 1;
        nav.style.display = "flex";
    } else {
        nav.style.visibility = "hidden";
        nav.style.opacity = 0;
        nav.style.display = "none";
    }
});

// Ajuste l'affichage du menu navigation pour les écrans larges ( > 1200px )
window.addEventListener("resize", () => {
    if (window.innerWidth >= 1200) {
        nav.style.visibility = "visible";
        nav.style.opacity = 1;
        nav.style.display = "flex";
    }
});