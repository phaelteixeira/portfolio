const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const menuLinks = document.querySelectorAll(".menu__link");
document.getElementById("ano").textContent = new Date().getFullYear();

function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");
  currentTheme === "dark"
    ? rootHtml.setAttribute("data-theme", "light")
    : rootHtml.setAttribute("data-theme", "dark");
  toggleTheme.classList.toggle("bi-sun");
  toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);

menuLinks.forEach((item) => {
  item.addEventListener("click", () => {
    menuLinks.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});
