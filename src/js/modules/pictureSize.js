const pictureSize = (selector) => {
    const blocks = document.querySelectorAll(selector);

    function showImg(block) {
        const img = block.querySelector("img");
        img.src = img.src.slice(0, -4) + "-1.png";
        block.querySelectorAll("p:not(.sizes-hit)").forEach(a => {
            a.style.display = "none";
        });
    }

    function hideImg(block) {
        const img = block.querySelector("img");
        img.src = img.src.slice(0, -6) + ".png";
        block.querySelectorAll("p:not(.sizes-hit)").forEach(a => {
            a.style.display = "block";
        });
    }

    blocks.forEach(a => {
        a.addEventListener("mouseover", () => {
            showImg(a);
        });
        a.addEventListener("mouseout", () => {
            hideImg(a);
        });
    });
};

export default pictureSize;