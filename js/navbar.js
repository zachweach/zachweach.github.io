const ham = document.getElementById("hamburger-menu")
const nav = document.getElementsByTagName("nav")[0]

function hamToggle() {
  ham.classList.toggle("active")
  nav.classList.toggle("active")
}

ham.addEventListener("click", hamToggle)