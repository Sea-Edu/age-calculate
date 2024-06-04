function calculateAge() {
  const day = parseInt(document.getElementById("day").value, 10);
  const month = parseInt(document.getElementById("month").value, 10);
  const year = parseInt(document.getElementById("year").value, 10);

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    alert("Ma'lumot kiriting");
    return;
  } else if (!isValidDate(day, month, year)) {
    alert("Iltimos, ma'lumotlarni to'g'ri kiriting");
    return;
  }

  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths -= 1;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (ageMonths < 0) {
    ageYears -= 1;
    ageMonths += 12;
  }

  document.getElementById("years").textContent = `${ageYears} years`;
  document.getElementById("months").textContent = `${ageMonths} months`;
  document.getElementById("days").textContent = `${ageDays} days`;
}

function isValidDate(day, month, year) {
  if (
    day < 1 ||
    day > 31 ||
    month < 1 ||
    month > 12 ||
    year < 1900 ||
    year > 9999
  ) {
    return false;
  }
  const date = new Date(year, month - 1, day);
  return (
    date.getDate() === day &&
    date.getMonth() === month - 1 &&
    date.getFullYear() === year
  );
}

function checkAndRefresh() {
  location.reload();
}