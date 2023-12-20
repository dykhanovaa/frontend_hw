const menuBtn = document.querySelector(".menu_btn")
const screenshots = document.querySelector(".screenshots")

function hide() {
    screenshots.classList.toggle("hidden")
    menuBtn.classList.toggle("rotated")
}

menuBtn.addEventListener("click", hide)