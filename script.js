// Search Function (Placeholder)
function searchLocation() {
    alert('Searching for the entered location...');
  }
  
  // Get Current Location
  function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        alert(`Current Location: ${latitude}, ${longitude}`);
      }, () => {
        alert('Unable to fetch location. Please try again.');
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
  
  