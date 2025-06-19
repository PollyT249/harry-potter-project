const button = document.getElementById("toggleButton");
const section = document.getElementById("charactersSection");

button.addEventListener("click", () => {
  const isVisible = section.classList.toggle("show");

  button.textContent = isVisible ? "Hide Characters" : "Show all Characters";

  if (isVisible) {
    setTimeout(() => {
      section.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }
});
