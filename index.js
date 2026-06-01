const ukensItemsEls = document.querySelectorAll(".ukens-card-item")

for (const ukensItemEl of ukensItemsEls) {
    ukensItemEl.addEventListener("click", function(){
        ukensItemEl.classList.toggle("active")
    })
    
}
