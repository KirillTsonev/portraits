const burger = (menu, burger) => {
    const menuElement = document.querySelector(menu);
    const burgerElement = document.querySelector(burger);

    menuElement.style.display = "none";

    burgerElement.addEventListener("click", () => {
        if (menuElement.style.display === "none") {
            menuElement.style.display = "block";
        } else {
            menuElement.style.display = "none";
        }
    });

    window.addEventListener("resize", () => {
        if (window.screen.availWidth > 992) {
            menuElement.style.display = "none";
        }
    });
};

export default burger;