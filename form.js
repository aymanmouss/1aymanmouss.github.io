let firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");
const birthDate = document.getElementById("birthdate");
const allLocations = document.getElementById("allLocations");
const locations = document.querySelectorAll("#allLocations .checkbox-input");
const checkbox1 = document.getElementById("checkbox1");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  const boxcheck = () => {
    for (let i = 0; i < locations.length; i++) {
      if (locations[i].checked === true) {
        return true;
      }
    }
    return false;
  };

  if (
    firstName.value < 2 ||
    lastName.value < 2 ||
    email.value.length == 0 ||
    quantity.value.length == 0 ||
    boxcheck() === false ||
    checkbox1.checked === false
  ) {
    e.preventDefault();
  }
});
