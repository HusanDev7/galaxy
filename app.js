// const slideOne = document.getElementById("slide-1");

// window.addEventListener("scroll", () => window.scrollY >= 30 ? slideOne.classList.add("active") : false)

const slideOne = document.getElementById("slide-1");
const runTitle = document.querySelector(".box-title")
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                slideOne.classList.add("active");
                observer.unobserve(slideOne);
            }, 1000)
        }
    });
});

observer.observe(slideOne);

let fullText = runTitle.innerHTML

runTitle.innerHTML = ''

const runText = (x = 0) => {
    runTitle.innerHTML = runTitle.innerHTML + fullText[x]
    x++;
    stop = setTimeout(() => runText(x), 200)
    x == 26 ? clearTimeout(stop) : false
}

runText()