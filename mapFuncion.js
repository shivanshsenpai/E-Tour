const fetchNearbyPlaces = async (lat, lng) => {
  const response = await fetch(`https://nominatim.openstreetmap.org/search?lat=${lat}&lon=${lng}&format=json`);
  const data = await response.json();
  console.log(data); // Use the data to add markers
};
const fetchParks = async () => {
  const response = await fetch('http://overpass-api.de/api/interpreter?data=[out:json];node["leisure"="park"](around:5000,20.5937,78.9629);out;');
  const data = await response.json();
  console.log(data); // Process and add parks to the map
};
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
      const userLat = position.coords.latitude;
      const userLng = position.coords.longitude;
      map.setView([userLat, userLng], 13); // Center the map on user location

      // Call function to fetch nearby places
      fetchNearbyPlaces(userLat, userLng);
  });
}
