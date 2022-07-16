const nav = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    let scrollpos = window.scrollY;
    if (scrollpos > 74) {
        nav.classList.add("nav-bg");
    } else if (scrollpos <= 74) {
        nav.classList.remove("nav-bg");
    }
});
