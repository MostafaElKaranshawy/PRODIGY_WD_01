var navbar = document.querySelector('header')

    // Change style on scroll
window.addEventListener("scroll", ()=> {
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = "rgb(0 0 0 / 70%)"; // Change to the desired color
    } else {
        navbar.style.backgroundColor = "rgb(0 0 0 / 21%)"; // Change to the default color
    }
});