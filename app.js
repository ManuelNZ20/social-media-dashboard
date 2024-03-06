const checkbox = document.querySelector("#checkbox");
const isModeScreen = (checked) => {
  document.body.setAttribute("style", "  transition: .3s, color .3s;");
  if (!checked) {
    document.body.classList.add("is-dark-mode");
    document.body.classList.remove("is-light-mode");
  } else {
    document.body.classList.remove("is-dark-mode");
    document.body.classList.add("is-light-mode");
  }
};

checkbox.addEventListener("change", (e) => isModeScreen(e.target.checked));

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  isModeScreen(checkbox.checked);
} else {
  isModeScreen(!checkbox.checked);
  checkbox.setAttribute("checked", false);
}
