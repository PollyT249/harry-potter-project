const apiUrl = "https://hp-api.onrender.com/api/characters/staff";
const cardContainer = document.querySelector("#card-container");

axios.get(apiUrl).then((response) => {
  const staff = response.data.slice(0, 8);
  console.log(response);
  const cardsHtml = staff
    .map(
      (staff) => `
    <div class="card-container">
      <div class="card">
        <div class="card-front">
          <img src="${staff.image || "placeholder.jpg"}" alt="${staff.name}" />
        </div>
        <div class="card-back">
          <p>Name: <span> ${staff.name}</span></p>
          <p>Alternate names: <span> ${
            staff.alternate_names.slice(0, 2)?.join(", ") ||
            "No alternate names"
          }</span></p>
          <p>Species: <span> ${staff.species}</span></p>
          <p>Gender: <span> ${staff.gender}</span></p>
          <p>House: <span> ${staff.house || "Unknown"}</span></p>
          <p>Date of birth: <span> ${staff.dateOfBirth || "Unknown"}</span></p>
          <p>Wizard: <span> ${staff.wizard ? "Yes" : "No"}</span></p>
          <p>Ancestry: <span> ${staff.ancestry || "Unknown"}</span></p>
          <p>Eye colour: <span> ${staff.eyeColour || "Unknown"}</span></p>
          <p>Hair colour: <span> ${staff.hairColour || "Unknown"}</span></p>
          <p>Wand: <span> ${staff.wand.core || "Unknown"}</span></p>
          <p>Patronus: <span> ${staff.patronus || "Unknown"}</span></p>
          <p>Actor: <span> ${staff.actor || "Unknown"}</span></p>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  cardContainer.innerHTML = cardsHtml;
});
