const dropdownBtn = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownBtn.addEventListener("click", () => {
  dropdownContent.classList.toggle("show");
});

