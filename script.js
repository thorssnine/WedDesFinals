const nav = document.querySelector(".nav-menu"),
    searchIcon = document.querySelector("#searchIcon"),
    navOpenBttn = document.querySelector(".navOpenBttn"),
    navCloseBttn = document.querySelector(".navCloseBttn");

searchIcon.addEventListener("click", () => {
    nav.classList.toggle("openSearch");
    nav.classList.remove("openNav");
    if (nav.classList.contains("openSearch")) {
        return searchIcon.classList.replace("uil-search", "uil-times");
    }
    searchIcon.classList.replace("uil-times", "uil-search");
})

navOpenBttn.addEventListener("click", () => {
    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
    searchIcon.classList.replace("uil-times", "uil-search");
})
navCloseBttn.addEventListener("click", () => {
    nav.classList.remove("openNav");
})

