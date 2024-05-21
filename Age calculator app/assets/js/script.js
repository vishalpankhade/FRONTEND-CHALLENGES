const yRes = document.getElementById("yRes");
const mRes = document.getElementById("mRes");
const dRes = document.getElementById("dRes");

const day = document.getElementById("Day");
const month = document.getElementById("Month");
const year = document.getElementById("Year");
let today = new Date();

const error = document.querySelectorAll(".error");
const inputGrpLabel = document.querySelectorAll(".input-grp label");
const inputGrpInput = document.querySelectorAll(".input-grp input");

function resetStyles() {
  error.forEach((err) => {
    err.style.display = "none";
    err.innerText = "";
  });

  inputGrpLabel.forEach((label) => {
    label.style.color = "";
  });

  inputGrpInput.forEach((input) => {
    input.style.border = "";
  });
}

function displayError(index, message) {
  error[index].style.display = "block";
  error[index].innerText = message;
  inputGrpLabel[index].style.color = "var(--Lightred)";
  inputGrpInput[index].style.border = "1.4px solid var(--Lightred)";
}

function calculateAge() {
  resetStyles();

  let dayValue = parseInt(day.value);
  let monthValue = parseInt(month.value);
  let yearValue = parseInt(year.value);
  let valid = true;

  if (isNaN(dayValue) || dayValue < 1 || dayValue > 31) {
    displayError(0, "must be valid date");
    valid = false;
  }

  if (isNaN(monthValue) || monthValue < 1 || monthValue > 12) {
    displayError(1, "must be valid month");
    valid = false;
  }

  if (isNaN(yearValue) || yearValue > today.getFullYear()) {
    displayError(2, "must be valid year");
    valid = false;
  }

  if (valid) {
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDay = today.getDate();

    let yearsOld = currentYear - yearValue;
    let monthsOld = currentMonth - monthValue;
    let daysOld = currentDay - dayValue;

    if (monthsOld < 0 || (monthsOld === 0 && daysOld < 0)) {
      yearsOld--;
      monthsOld = 12 + monthsOld;
    }

    if (daysOld < 0) {
      let previousMonth = new Date(currentYear, currentMonth - 1, 0);
      daysOld += previousMonth.getDate();
      monthsOld--;
    }

    yRes.innerText = yearsOld;
    mRes.innerText = monthsOld;
    dRes.innerText = daysOld;
  }
}
