const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if(position < screenHeight - 100){
            section.classList.add("show");
        }
    });
});

