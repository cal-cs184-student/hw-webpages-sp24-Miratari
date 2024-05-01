let element;

window.addEventListener('DOMContentLoaded', function() {
    element = document.querySelector("#content")

    const navitems = document.querySelectorAll('.navitem');

    for (let i = 0; i < navitems.length; i++) {
        let navitem = navitems[i];
            
        if (i == 0) {
            navitem.style.backgroundColor = "#dadada";
        } else {
            navitem.style.backgroundColor = "#f1f1f1";
        }
    }

    element.addEventListener("scroll", (event) => {

        const cards = document.querySelectorAll('.card');
        let current = 0;

        console.log("cards found:", cards);

        for (let i = 0; i < cards.length; i++) {
            let section = cards[i];
            const sectionBounds = section.getBoundingClientRect();
            if (scrollY >= sectionBounds.top - 0.5*sectionBounds.height) {
                current = i;
            }
        }

        console.log("current card:", current);

        const navitems = document.querySelectorAll('.navitem');
        for (let i = 0; i < navitems.length; i++) {
            let navitem = navitems[i];
            
            if (i == current) {
                navitem.style.backgroundColor = "#dadada";
            } else {
                navitem.style.backgroundColor = "#f1f1f1";
            }
        }

    });
});

