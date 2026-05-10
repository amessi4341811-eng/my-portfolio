let cards = document.querySelectorAll(".card");

window.addEventListener("scroll", revealCards);

function revealCards(){

    let windowHeight = window.innerHeight;

    cards.forEach(card => {

        let cardTop =
        card.getBoundingClientRect().top;

        if(cardTop < windowHeight - 100){

            card.classList.add("show");

        }

    });

}


