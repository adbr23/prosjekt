

const burgerEl = document.querySelector(".burger")
const xEl = document.querySelector(".x")
const navLinksEl = document.querySelector(".nav-links")

burgerEl.addEventListener("click", function () {
    xEl.classList.add("active")
    burgerEl.classList.add("active")
    navLinksEl.classList.add("active")
})

xEl.addEventListener("click", function () {
    xEl.classList.remove("active")
    burgerEl.classList.remove("active")
    navLinksEl.classList.remove("active")
})

window.addEventListener("scroll", function () {
    xEl.classList.remove("active")
    burgerEl.classList.remove("active")
    navLinksEl.classList.remove("active")
})

/* OPP */
const oppEl = document.querySelector(".opp")

oppEl.addEventListener("click", function () {
    window.scrollTo({
        top: 0
    })
})

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        oppEl.classList.add("active")
    } else {
        oppEl.classList.remove("active")

    }
})














