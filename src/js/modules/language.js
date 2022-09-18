const language = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(a => {
        a.addEventListener("keypress", (e) => {
            if (e.key.match(/[^a-z0-9]/gi)) {
                e.preventDefault();
            }
        });
    });
};

export default language;