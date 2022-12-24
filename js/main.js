let docTitle = document.title;

window.addEventListener("blur", () => {
  document.title = "Where are you going pls come back 😔";
});

window.addEventListener("focus", () => {
  document.title = docTitle;
});
