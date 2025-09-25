const dropdownBtn = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownBtn.addEventListener("click", () => {
  dropdownContent.classList.toggle("show");
});


  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".categories button");
    const images = document.querySelectorAll("main img");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
  
        // спершу прибираємо highlight з усіх
        images.forEach(img => img.classList.remove("highlight"));
  
        // додаємо highlight лише потрібним
        images.forEach(img => {
          if (img.id === category) {
            img.classList.add("highlight");
          }
        });
      });
    });
  });
  
