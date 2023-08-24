const button = document.querySelector(".nav__cta-top button");
const header = document.querySelector(".header")
button.addEventListener("click", () => {
  header.scrollIntoView({behavior: "smooth"})
})