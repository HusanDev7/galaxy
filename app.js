const slideOne = document.getElementById("slide-1");

window.addEventListener("scroll", () => {
    const triggerHeight = window.innerHeight / 1;
    const slideTop = slideOne.getBoundingClientRect().top;

    if (slideTop < triggerHeight) {
        slideOne.classList.add("active");
    } else {
        slideOne.classList.remove("active");
    }
});