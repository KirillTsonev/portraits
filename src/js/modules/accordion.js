const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector);

    btns.forEach(a => {
        a.addEventListener('click', function() {
            document.querySelectorAll(".accordion-block").forEach(a => {
                a.classList.remove('active-content', 'active-style');
                console.log(a.previousElementSibling.classList.remove('active-style'));
                a.style.maxHeight = '0px';
            });
            
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');

            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });
};

export default accordion;