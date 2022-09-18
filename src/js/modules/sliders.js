const sliders = (slides, dir, prev, next) => {
    let slideIndex = 1;
    let paused = false;
    const items = document.querySelectorAll(slides);

    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = items.length;
        }

        items.forEach(a => {
            a.classList.add("animate__animated");
            a.style.display = "none";
        });

        items[slideIndex - 1].style.display = "block";
    }

    showSlides(slideIndex);

    function plusSlide(n) {
        showSlides(slideIndex += n);
    }

    try {
        const prevBtn = document.querySelector(prev);
        const nextBtn = document.querySelector(next);

        prevBtn.addEventListener("click", () => {
            plusSlide(-1);
            items[slideIndex - 1].classList.remove("animate__slideInLeft");
            items[slideIndex - 1].classList.add("animate__slideInRight");
        });

        nextBtn.addEventListener("click", () => {
            plusSlide(1);
            items[slideIndex - 1].classList.add("animate__slideInLeft");
            items[slideIndex - 1].classList.remove("animate__slideInRight");
        });
    } catch(e) {}

    function activateAnimation() {
        if (dir === "vertical") {
            paused = setInterval(() => {
                plusSlide(1);
                items[slideIndex - 1].classList.add("animate__slideInDown");
            }, 3000);
        } else {
            paused = setInterval(() => {
                plusSlide(1);
                items[slideIndex - 1].classList.add("animate__slideInLeft");
                items[slideIndex - 1].classList.remove("animate__slideInRight");
            }, 3000);
        }
    }

    activateAnimation();

    items[0].parentNode.addEventListener("mouseenter", () => {
        clearInterval(paused);
    });
    items[0].parentNode.addEventListener("mouseleave", () => {
        activateAnimation();
    });
};

export default sliders;