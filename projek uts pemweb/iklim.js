const apiKey = "4184f09fb80de96d3bdffffa10515377";

function updateDateTime() {
  const now = new Date();
  const options = { weekday:'long', year:'numeric', month:'long', day:'numeric', hour:'2-digit', minute:'2-digit', second:'2-digit' };
  document.getElementById('dateTime').textContent = now.toLocaleDateString('id-ID', options);
}
setInterval(updateDateTime, 1000);
updateDateTime();

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") document.body.classList.add("dark-mode");
}
applySavedTheme();

async function getClimate() {
  const city = document.getElementById("cityClimate").value;
  if (!city) return alert("Masukkan nama kota!");

  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=id`);
    const data = await res.json();
    const desc = data.weather[0].description;
    const temp = data.main.temp;
    const humidity = data.main.humidity;

    document.getElementById("climateResult").innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡️ Suhu: ${temp}°C</p>
      <p>💧 Kelembapan: ${humidity}%</p>
      <p>🌤️ Kondisi: ${desc}</p>
    `;
  } catch {
    document.getElementById("climateResult").innerHTML = "<p>Gagal memuat data iklim.</p>";
  }
}