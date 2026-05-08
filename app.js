const moreEl = document.querySelector(".more-tekst")
const aboutBtnEls = document.querySelectorAll(".bokbtn") /* finner alle knappene */




aboutBtnEls.forEach(function (knapp) {           /* looper gjennom hver knapp */
    knapp.addEventListener("click", function () {
        const moreTekst = knapp.parentElement.querySelector(".more-tekst")  /* finner .more-tekst som ligger i samme .bok-tekst som knappen */

        moreTekst.classList.toggle("active")

        if (moreTekst.classList.contains("active")) {
            knapp.textContent = "Se mindre"
        } else {
            knapp.textContent = "Se mer"
        }


    })
})



const starEls = document.querySelectorAll(".fa-star")

for (const starEl of starEls) {
    starEl.addEventListener("click", function () {
        starEl.classList.toggle("active")
    })
}

const japanEl = document.getElementById("japan-card")
const japanImgEl = document.getElementById("japan-img")
const japanTekstEl = document.getElementById("japan-tekst")

japanEl.addEventListener("click", function () {
    japanImgEl.classList.toggle("active")
    japanTekstEl.classList.toggle("active")
    japanEl.classList.toggle("active")
})




