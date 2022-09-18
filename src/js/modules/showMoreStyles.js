import {getResource} from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    btn.addEventListener("click", function() {
        getResource("http://localhost:3000/styles")
            .then(res => createCards(res))
            .catch();

        this.remove();
    });

    function createCards(response) {
        response.forEach(a => {
            let card = document.createElement("div");

            card.classList.add("animate__animated", "animate__fadeInUp", "col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
        
            card.innerHTML = `
            <div class="styles-block">
                <img src=${a.src} alt="style">
        
                <h4>${a.title}</h4>
        
                <a href=${a.link}>Подробнее</a>
            </div>
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    }
};

export default showMoreStyles;