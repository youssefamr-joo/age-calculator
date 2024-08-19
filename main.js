document.getElementById("calculateBtn").addEventListener("click", function () {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value) - 1; // Months are 0-indexed
  const year = parseInt(document.getElementById("year").value);

  if (isValidDate(day, month, year)) {
    const dob = new Date(year, month, day);
    const age = calculateAge(dob);
    document.getElementById(
      "ageResult"
    ).textContent = `${age.years} years, ${age.months} months, and ${age.days} days old`;
  } else {
    document.getElementById("ageResult").textContent =
      "Please enter a valid date";
  }
});

function isValidDate(day, month, year) {
  const date = new Date(year, month, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month &&
    date.getDate() === day
  );
}

function calculateAge(dob) {
  const now = new Date();
  let years = now.getFullYear() - dob.getFullYear();
  let months = now.getMonth() - dob.getMonth();
  let days = now.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}
