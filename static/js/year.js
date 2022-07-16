function countYear() {
    let year = document.querySelector("#starting-year");
    let freelance = document.querySelector("#init-year");
    let copyright_year = document.querySelector("#copyright-year");
    let x = new Date(year.getAttribute("date"));
    let y = new Date(freelance.getAttribute("date"));
    let d = new Date();
    let year_diff1 = d.getFullYear() - x.getFullYear();
    let year_diff2 = d.getFullYear() - y.getFullYear();
    year.innerHTML = year_diff1;
    freelance.innerHTML = year_diff2;
    copyright_year.innerHTML = d.getFullYear();
}

countYear();
