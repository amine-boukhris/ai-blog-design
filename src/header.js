const bars = document.querySelector(".header__menu-icon");
const mobileNavigation = document.querySelector(".mobile-navigation");

bars.addEventListener("click", () => {
  if (bars.classList.contains("fa-bars")) {
    bars.classList.remove("fa-bars")
    bars.classList.add("fa-xmark");
    mobileNavigation.style.display = "block";
  } else {
    bars.classList.remove("fa-xmark");
    bars.classList.add("fa-bars")
    mobileNavigation.style.display = "none";
  }
})