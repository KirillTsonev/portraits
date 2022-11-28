import {getResource} from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    btn.addEventListener("click", function() {
        getResource("https://6348588d0b382d796c6fde8e.mockapi.io/style_cards")
            .then(expandSection())
            .then(res => createCards(res))
            .catch();

        this.remove();
    });

    function expandSection () {
        document.querySelector(".styles").style.height = "1100px"
    }

    function createCards(response) {
        response.forEach(a => {
            let card = document.createElement("div");

            card.classList.add("animate__animated", "animate__fadeInUp", "col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
        
            card.innerHTML = `
            <div class="styles-block">
                <img src=${a.src} alt="style">
        
                <h4>${a.title}</h4>
        
                <a href=${a.link}>More details</a>
            </div>
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    }
};

export default showMoreStyles;