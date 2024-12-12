let table = document.querySelectorAll(`.carre`);
let titre = document.getElementById("titre");




table.forEach(cell => {
    cell.addEventListener(`click`, () => {
        let compteur = document.querySelectorAll("[data-jouer]");
        if (compteur.length % 2 === 0) {
            cell.style.backgroundPosition = "right";
            cell.dataset.jouer = "rond";
            michel(table)
            
        } else {
            cell.style.backgroundPosition = "center";
            cell.dataset.jouer = "croix";

            michel(table)
        }
       

    })
});


function michel(table) {

    let a1 = document.getElementById("a1");
    let a2 = document.getElementById("a2");
    let a3 = document.getElementById("a3");
    let b1 = document.getElementById("b1");
    let b2 = document.getElementById("b2");
    let b3 = document.getElementById("b3");
    let c1 = document.getElementById("c1");
    let c2 = document.getElementById("c2");
    let c3 = document.getElementById("c3");

    if (
        (a1.dataset.jouer === "croix" && a2.dataset.jouer === "croix" && a3.dataset.jouer === "croix") ||
        (b1.dataset.jouer === "croix" && b2.dataset.jouer === "croix" && b3.dataset.jouer === "croix") ||
        (c1.dataset.jouer === "croix" && c2.dataset.jouer === "croix" && c3.dataset.jouer === "croix") ||
        (a1.dataset.jouer === "croix" && b1.dataset.jouer === "croix" && c1.dataset.jouer === "croix") ||
        (a2.dataset.jouer === "croix" && b2.dataset.jouer === "croix" && c2.dataset.jouer === "croix") ||
        (a3.dataset.jouer === "croix" && b3.dataset.jouer === "croix" && c3.dataset.jouer === "croix") ||
        (a1.dataset.jouer === "croix" && b2.dataset.jouer === "croix" && c3.dataset.jouer === "croix") ||
        (a3.dataset.jouer === "croix" && b2.dataset.jouer === "croix" && c1.dataset.jouer === "croix")


    ) {
        titre.textContent = "Les croix ont gagné";
        
        a1.style.pointerEvents = "none";
        a2.style.pointerEvents = "none";
        a3.style.pointerEvents = "none";
        b1.style.pointerEvents = "none";
        b2.style.pointerEvents = "none";
        b3.style.pointerEvents = "none";
        c1.style.pointerEvents = "none";
        c2.style.pointerEvents = "none";
        c3.style.pointerEvents = "none";
        
        

    }

    else if (
        (a1.dataset.jouer === "rond" && a2.dataset.jouer === "rond" && a3.dataset.jouer === "rond") ||
        (b1.dataset.jouer === "rond" && b2.dataset.jouer === "rond" && b3.dataset.jouer === "rond") ||
        (c1.dataset.jouer === "rond" && c2.dataset.jouer === "rond" && c3.dataset.jouer === "rond") ||
        (a1.dataset.jouer === "rond" && b1.dataset.jouer === "rond" && c1.dataset.jouer === "rond") ||
        (a2.dataset.jouer === "rond" && b2.dataset.jouer === "rond" && c2.dataset.jouer === "rond") ||
        (a3.dataset.jouer === "rond" && b3.dataset.jouer === "rond" && c3.dataset.jouer === "rond") ||
        (a1.dataset.jouer === "rond" && b2.dataset.jouer === "rond" && c3.dataset.jouer === "rond") ||
        (a3.dataset.jouer === "rond" && b2.dataset.jouer === "rond" && c1.dataset.jouer === "rond")

        
    ) {
        titre.textContent = "Les ronds ont gagné";
        a1.style.pointerEvents = "none";
        a2.style.pointerEvents = "none";
        a3.style.pointerEvents = "none";
        b1.style.pointerEvents = "none";
        b2.style.pointerEvents = "none";
        b3.style.pointerEvents = "none";
        c1.style.pointerEvents = "none";
        c2.style.pointerEvents = "none";
        c3.style.pointerEvents = "none";
        
        
       

    }
    else if  (document.querySelectorAll("[data-jouer]").length === 9) {
        titre.textContent = "DRAW";
    }

    document.getElementById("rejouer").addEventListener("click",() => location.reload())
    



};