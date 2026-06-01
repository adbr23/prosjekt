const bokImg1El = document.querySelector(".blimedimg1")
const bokImg2El = document.querySelector(".blimedimg2")
const blimedEl = document.querySelector(".blimedimgs")

blimedEl.addEventListener("mouseenter", function () {
    bokImg1El.classList.add("active")
    bokImg2El.classList.add("active")
})

blimedEl.addEventListener("mouseleave", function () {
    bokImg1El.classList.remove("active")
    bokImg2El.classList.remove("active")
})

