const toggleMenu = document.querySelector("#toggleMenu");
const getProjectToggle = document.querySelector("#projectMenu");

toggleMenu.addEventListener("mouseenter", function () {
  getProjectToggle.style.transform = "translateX(0px)";
});

toggleMenu.addEventListener("mouseover", function () {
  getProjectToggle.style.transform = "translateX(0px)";
});

toggleMenu.addEventListener("mouseleave", function () {
  getProjectToggle.style.transform = "translateX(-325px)";
});

toggleMenu.addEventListener("click", function () {
  getProjectToggle.style.transform = "translateX(0px)";
});

getProjectToggle.addEventListener("mouseenter", function () {
  getProjectToggle.style.transform = "translateX(0px)";
});

getProjectToggle.addEventListener("mouseover", function () {
  getProjectToggle.style.transform = "translateX(0px)";
});

getProjectToggle.addEventListener("mouseleave", function () {
  getProjectToggle.style.transform = "translateX(-325px)";
});

getProjectToggle.addEventListener("click", function () {
  getProjectToggle.style.transform = "translateX(-325px)";
});
