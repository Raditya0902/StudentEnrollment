const output = document.querySelector(".output");
const submitBtn = document.querySelector(".form-btn");

const clearData = function () {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("website").value = "";
  document.getElementById("gender").value = "Male";
  for (
    let i = 0;
    i < document.querySelectorAll("input[name=skills]").length;
    i++
  ) {
    document.querySelectorAll("input[name=skills]")[i].checked = false;
  }
};

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const personName = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const website = document.getElementById("website").value;
  const gender = document.getElementById("gender").value;
  const skillsInput = document.querySelectorAll("input[name='skills']:checked");
  const skillsArray = Array.from(skillsInput)
    .map((skills) => skills.id)
    .join(", ");

  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerHTML = `<img src=${
    gender === "male" ? "male.png" : "female.png"
  } alt="User photo" />
    <div class="card-data">
      <h3>${personName}</span></h3>
      <a href="mailto:${email}">${email}</a>
      <a href=${website}>${website.split("//")[1]}</a>
      <p>Skills - ${skillsArray === "" ? "None" : skillsArray}</p>
      <button class="delete-btn">Remove</button>
    </div>`;

  output.appendChild(newCard);
  alert("Student Enrolled Successfully!");
  clearData();

  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const card = button.closest("div.card");
      card.remove();
    });
  });
});
