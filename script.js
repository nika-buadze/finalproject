const burgerbar = document.querySelector(".burgerbar")
const navi = document.querySelector(".navi")

burgerbar.addEventListener("click", () => {
    burgerbar.classList.toggle("active");
    navi.classList.toggle("active");
})

document.querySelectorAll(".li-item").forEach(n => n.addEventListener("click", () => {
    burgerbar.classList.remove("active");
    navi.classList.remove("active");
}))