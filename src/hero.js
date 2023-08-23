const buttons = document.querySelectorAll(".hero__nav-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("active")) {
      return;
    }
    document.querySelector(".hero__nav-button.active").classList.remove("active")
    button.classList.add("active");
    updateUi(button.textContent);
  });
});

function updateUi(topic) {
  console.log("new page data of " + topic);
}