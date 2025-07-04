document.getElementById("ageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const dobInput = document.getElementById("dob").value;

  if (!dobInput) {
    document.getElementById("result").innerText = "❗ Please select your birth date.";
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date();

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById("result").innerText =
    `🎂 You are ${years} years, ${months} months, and ${days} days old.`;
});
