const filter = () => {
    const menu = document.querySelector(".portfolio-menu");
    const items = menu.querySelectorAll('li');
    const btnAll = menu.querySelector('.all');
    const btnLovers = menu.querySelector('.lovers');
    const btnChef = menu.querySelector('.chef');
    const btnGirl = menu.querySelector('.girl');
    const btnGuy = menu.querySelector('.guy');
    const btnGrandmother = menu.querySelector('.grandmother');
    const btnGranddad = menu.querySelector('.granddad');
    const wrapper = document.querySelector('.portfolio-wrapper');
    const markAll = wrapper.querySelectorAll('.all');
    const markGirl = wrapper.querySelectorAll('.girl');
    const markLovers = wrapper.querySelectorAll('.lovers');
    const markChef = wrapper.querySelectorAll('.chef');
    const markGuy = wrapper.querySelectorAll('.guy');
    const no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach(a => {
            a.style.display = "none";
            a.classList.remove("animate__animated", "animate__fadeIn");
        });

        no.style.display = "none";
        no.classList.remove("animate__animated", "animate__fadeIn");

        if (markType) {
            markType.forEach(a => {
                a.style.display = "block";
                a.classList.add("animate__animated", "animate__fadeIn");
            });
        } else {
            no.style.display = "block";
            no.classList.add("animate__animated", "animate__fadeIn");
        }
    };

    btnAll.addEventListener("click", () => {
        typeFilter(markAll);
    });

    btnLovers.addEventListener("click", () => {
        typeFilter(markLovers);
    });

    btnChef.addEventListener("click", () => {
        typeFilter(markChef);
    });

    btnGuy.addEventListener("click", () => {
        typeFilter(markGuy);
    });

    btnGirl.addEventListener("click", () => {
        typeFilter(markGirl);
    });

    btnGrandmother.addEventListener("click", () => {
        typeFilter();
    });

    btnGranddad.addEventListener("click", () => {
        typeFilter();
    });

    menu.addEventListener("click", (e) => {
        let target = e.target;

        if (target && target.tagName === "LI") {
            items.forEach(a => {
                a.classList.remove("active");
                target.classList.add("active");
            });
        }
    });
};

export default filter;