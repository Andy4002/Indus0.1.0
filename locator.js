// Check if geolocation is available
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showMap, showError);
} else {
  alert("Geolocation is not supported by your browser.");
}

function showMap(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  // Initialize the map
  const map = L.map('map').setView([lat, lon], 13);

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Add a marker at the user's location
  L.marker([lat, lon]).addTo(map)
    .bindPopup("You are here!")
    .openPopup();
}

function showError(error) {
  alert("Error getting location: " + error.message);
}
