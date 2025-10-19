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

async function getAirQuality() {
  const city = document.getElementById("cityAQI").value;
  if (!city) return alert("Masukkan nama kota!");

  try {
    const geoRes = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`);
    const [geo] = await geoRes.json();
    if (!geo) throw new Error("Kota tidak ditemukan");

    const aqiRes = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${geo.lat}&lon=${geo.lon}&appid=${apiKey}`);
    const aqiData = await aqiRes.json();
    const aqi = aqiData.list[0].main.aqi;

    const quality = ["Baik 😊", "Sedang 😐", "Tidak Sehat 😷", "Sangat Tidak Sehat 🤒", "Berbahaya ☠️"];
    document.getElementById("airResult").innerHTML = `
      <h2>${city}</h2>
      <p>Indeks Kualitas Udara: <strong>${aqi}</strong></p>
      <p>Kategori: ${quality[aqi - 1]}</p>
    `;
  } catch {
    document.getElementById("airResult").innerHTML = `<p>Gagal memuat data kualitas udara.</p>`;
  }
}