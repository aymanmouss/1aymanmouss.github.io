const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");
const birthDate = document.getElementById("birthdate");
const allLocations = document.getElementById("allLocations");
const locations = document.querySelectorAll("#allLocations .checkbox-input");
const checkbox1 = document.getElementById("checkbox1");
const form = document.getElementById("form");
const allmodal = document.getElementById("all-modal");
const validationModal = document.getElementById("validation-modal");
const closevBtn = document.getElementById("closevbtn");
const regexString = /^[a-z-A-Z]+$/;

// ==== changing the border of the input ====

const inputStyle = (inputName, dataError) => {
  if (dataError) {
    inputName.parentElement.setAttribute("data-error-visible", dataError);
    return (inputName.style.border = "solid #e54858 2px");
  }
  inputName.parentElement.setAttribute("data-error-visible", dataError);
  return (inputName.style.border = "solid #279e7a 2px");
};

// ==== Checking the FistName ====

const fistNameCheck = () => {
  if (
    firstName.value.trim().length < 2 ||
    firstName.value.trim() === "" ||
    !firstName.value.match(regexString)
  ) {
    inputStyle(firstName, true);
    return false;
  }
  inputStyle(firstName, false);
  return true;
};

firstName.addEventListener("focusout", (e) => {
  fistNameCheck();
});

// ==== Checking the LastName ====

const lastNameCheck = () => {
  if (
    lastName.value.trim().length < 2 ||
    lastName.value.trim() === "" ||
    !lastName.value.match(regexString)
  ) {
    inputStyle(lastName, true);
    return false;
  }
  inputStyle(lastName, false);
  return true;
};
lastName.addEventListener("focusout", (e) => {
  lastNameCheck();
});

// ==== Checking email ====

const re =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const emailCheck = () => {
  if (email.value.trim().match(re)) {
    inputStyle(email, false);
    return true;
  }
  inputStyle(email, true);
  return false;
};
email.addEventListener("focusout", (e) => {
  emailCheck();
});

// ==== birth Date Check ====

const birthDateCheck = () => {
  if (birthDate.value.length === 10) {
    inputStyle(birthDate, false);
    return true;
  }
  inputStyle(birthDate, true);
  return false;
};
birthDate.addEventListener("focusout", (e) => {
  birthDateCheck();
});

// ==== Quantity Check ====

const quantityCheck = () => {
  if (quantity.value.length > 0) {
    inputStyle(quantity, false);
    return true;
  }
  inputStyle(quantity, true);
  return false;
};
quantity.addEventListener("focusout", (e) => {
  quantityCheck();
});

// ==== Check Box Check ====

const boxcheck = () => {
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked) {
      allLocations.setAttribute("data-error-visible", false);
      return true;
    }
  }
  allLocations.setAttribute("data-error-visible", true);
  return false;
};

//  ---On Chahnge---
allLocations.addEventListener("change", (e) => {
  boxcheck();
});

//==== Check Box Check ====

const checkBox1Check = () => {
  if (checkbox1.checked) {
    checkbox1.parentElement.setAttribute("data-error-visible", false);
    return true;
  }
  checkbox1.parentElement.setAttribute("data-error-visible", true);
  return false;
};

checkbox1.addEventListener("change", (e) => {
  checkBox1Check();
});

// ==== On Form Submit ===

form.addEventListener("submit", (e) => {
  fistNameCheck();
  lastNameCheck();
  emailCheck();
  birthDateCheck();
  quantityCheck();
  boxcheck();
  checkBox1Check();
  e.preventDefault();

  if (
    fistNameCheck() &&
    lastNameCheck() &&
    emailCheck() &&
    birthDateCheck() &&
    quantityCheck() &&
    boxcheck() &&
    checkBox1Check()
  ) {
    e.preventDefault();
    allmodal.style.display = "none";
    validationModal.style.display = "block";
    firstName.style.border = "none";
    lastName.style.border = "none";
    email.style.border = "none";
    quantity.style.border = "none";
    birthDate.style.border = "none";
  }
  e.preventDefault();
});

closevBtn.addEventListener("click", (e) => {
  validationModal.style.display = "none";
  form.reset();
});
