// Liste des projets
const projets = {
    "1": {
        title: "Bayti",
        video: "img/portf/video siteweb agence.mp4",
       // screenshots: ["img/portfolio/p2.jpg.jpg", "img/portfolio/p3.jpg.jpg", "img/portfolio/p4.jpg.jpg","img/portfolio/p8.jpg.jpg","img/portfolio/p9.jpg.jpg","img/portfolio/p7.jpg.jpg"]
    },
    "2": {
        title: "Location voitures ",
       // video: "videos/projet2.mp4",
       screenshots: ["img/portfolio/p2.jpg.jpg", "img/portfolio/p3.jpg.jpg", "img/portfolio/p4.jpg.jpg","img/portfolio/p8.jpg.jpg","img/portfolio/p9.jpg.jpg","img/portfolio/p7.jpg.jpg"]
    },
    "3": {
        title: "Renouvellement IGA WEBSITE",
        video: "img/portf/videomp4_muc7b6FK.mp4",
    },
    "4": {
        title: "Fournitures bureautiques",
        video: "img/portf/vido3.mp4",
        
    }
};

// Récupérer l'ID du projet depuis l'URL
const params = new URLSearchParams(window.location.search);
const projetId = params.get("projet");

if (projetId && projets[projetId]) {
    if (projetId === "1" || projetId === "3" || projetId === "4" ) {
        document.getElementById("projet-video").src = projets[projetId].video;
    } else {
        document.getElementById("projet-video").style.display = "none"; // Masquer la vidéo pour les autres projets
    }
    document.getElementById("projet-title").innerText = projets[projetId].title;
  //  document.getElementById("projet-video").src = projets[projetId].video;
    document.getElementById("p2").src = projets[projetId].screenshots[0];
    document.getElementById("p3").src = projets[projetId].screenshots[1];
    document.getElementById("p8").src = projets[projetId].screenshots[2];
    document.getElementById("p9").src = projets[projetId].screenshots[3];
    document.getElementById("p4").src = projets[projetId].screenshots[4];
    document.getElementById("p7").src = projets[projetId].screenshots[5];
    
}


// Lightbox
function showImage(img) {
    document.getElementById("largeImage").src = img.src;
    document.querySelector(".overlay").classList.add("active");
}

function hideImage() {
    document.querySelector(".overlay").classList.remove("active");
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
