// document.querySelector('.emojies').addEventListener('click', function(e) {
//     e.preventDefault();
//     document.querySelector('.sub-dropdown-content').classList.toggle('show');
//   });
  
const dropdownBtn = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownBtn.addEventListener("click", () => {
  dropdownContent.classList.toggle("show");
});
