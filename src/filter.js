const apiUrl = "https://hp-api.onrender.com/api/characters";
const cardContainer = document.querySelector("#card-container");
const filterButtons = document.querySelectorAll("[data-house]");

let allCharacters = [];

axios.get(apiUrl).then((response) => {
  allCharacters = response.data;
  renderCharacters(allCharacters); // show all by default
});

function renderCharacters(characters) {
  const cardsHtml = characters
    .map(
      (character) => `
    <div class="card-container">
      <div class="card">
        <div class="card-front">
          <img src="${character.image || "images/placeholder.jpg"}" alt="${
        character.name
      }" 
               onerror="this.onerror=null;this.src='images/placeholder.jpg';" />
        </div>
        <div class="card-back">
          <p>Name: <span> ${character.name}</span></p>
          <p>Alternate names: <span> ${
            character.alternate_names.slice(0, 2)?.join(", ") ||
            "No alternate names"
          }</span></p>
          <p>Species: <span> ${character.species}</span></p>
          <p>Gender: <span> ${character.gender}</span></p>
          <p>House: <span> ${character.house || "Unknown"}</span></p>
          <p>Date of birth: <span> ${
            character.dateOfBirth || "Unknown"
          }</span></p>
          <p>Wizard: <span> ${character.wizard ? "Yes" : "No"}</span></p>
          <p>Ancestry: <span> ${character.ancestry || "Unknown"}</span></p>
          <p>Eye colour: <span> ${character.eyeColour || "Unknown"}</span></p>
          <p>Hair colour: <span> ${character.hairColour || "Unknown"}</span></p>
          <p>Wand: <span> ${character.wand.core || "Unknown"}</span></p>
          <p>Patronus: <span> ${character.patronus || "Unknown"}</span></p>
          <p>Actor: <span> ${character.actor || "Unknown"}</span></p>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  cardContainer.innerHTML = cardsHtml;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedHouse = button.getAttribute("data-house");
    const filtered = allCharacters.filter(
      (char) => char.house === selectedHouse
    );
    renderCharacters(filtered);
  });
});
