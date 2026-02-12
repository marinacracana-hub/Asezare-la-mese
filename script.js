const guests = [
  { nume: "ana popescu", masa: "Masa 3" },
  { nume: "mihai popescu", masa: "Masa 7" },
  { nume: "ion ionescu", masa: "Masa 2" },
  { nume: "elena ionescu", masa: "Masa 5" }
];

function searchName() {
  const input = document
    .getElementById("searchInput")
    .value
    .toLowerCase()
    .trim();

  const result = document.getElementById("result");
  result.innerHTML = "";

  if (input === "") return;

  // 1️⃣ Căutare exactă (nume complet)
  const exactMatch = guests.find(
    guest => guest.nume === input
  );

  if (exactMatch) {
    result.innerHTML = `Ești la <strong>${exactMatch.masa}</strong> 🎉`;
    return;
  }

  // 2️⃣ Căutare parțială (ex: nume de familie)
  const matches = guests.filter(
    guest => guest.nume.includes(input)
  );

  if (matches.length > 0) {
    let html = "<ul>";
    matches.forEach(guest => {
      html += `<li>– ${capitalize(guest.nume)} → ${guest.masa}</li>`;
    });
    html += "</ul>";

    result.innerHTML = html;
  } else {
    result.textContent = "Niciun rezultat găsit 😕";
  }
}

// Mic helper pentru afișare frumoasă
function capitalize(text) {
  return text
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
