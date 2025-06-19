const apiUrl = "https://hp-api.onrender.com/api/characters/students";
const cardContainer = document.querySelector("#card-container");

axios.get(apiUrl).then((response) => {
  const students = response.data.slice(0, 8); // first 8 characters
  console.log(response);
  const cardsHtml = students
    .map(
      (student) => `
    <div class="card-container">
      <div class="card">
        <div class="card-front">
          <img src="${student.image || "placeholder.jpg"}" alt="${
        student.name
      }" />
        </div>
        <div class="card-back">
          <p>Name: <span> ${student.name}</span></p>
          <p>Alternate names: <span> ${
            student.alternate_names.slice(0, 2)?.join(", ") || "None"
          }</span></p>
          <p>Species: <span> ${student.species}</span></p>
          <p>Gender: <span> ${student.gender}</span></p>
          <p>House: <span> ${student.house}</span></p>
          <p>Date of birth: <span> ${student.dateOfBirth}</span></p>
          <p>Wizard: <span> ${student.wizard ? "Yes" : "No"}</span></p>
          <p>Ancestry: <span> ${student.ancestry}</span></p>
          <p>Eye colour: <span> ${student.eyeColour}</span></p>
          <p>Hair colour: <span> ${student.hairColour}</span></p>
          <p>Wand: <span> ${student.wand.core}</span></p>
          <p>Patronus: <span> ${student.patronus}</span></p>
          <p>Actor: <span> ${student.actor || "Unknown"}</span></p>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  cardContainer.innerHTML = cardsHtml;
});
