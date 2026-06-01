const aboutBtnEls = document.querySelectorAll(".bokbtn")

for (const aboutBtnEl of aboutBtnEls) {
    aboutBtnEl.addEventListener("click", function () {

        const bokCard = aboutBtnEl.closest(".bok-card")
        const moreEl = bokCard.querySelector(".more-tekst")

        moreEl.classList.toggle("active")

        if (moreEl.classList.contains("active")) {
            aboutBtnEl.textContent = "Se mindre"
        } else {
            aboutBtnEl.textContent = "Se mer"
        }
    });
}


const starEls = document.querySelectorAll(".fa-star")

for (const starEl of starEls) {
    starEl.addEventListener("click", function () {
        starEl.classList.toggle("active")
    })
}