function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5, // Use lowercase "zoom" instead of "Zoom"
      center: { lat: 51.5072, lng: 0.1276  }
    });
    addMarker({ lat: 52.5504, lng: 1.8774 });
    addMarker({ lat: 52.4128, lng: 1.5090 });
    addMarker({ lat: 51.5072, lng: 0.1276 });
  
  
    function addMarker(coords) {
      var marker = new google.maps.Marker({
        position: coords,
        map: map,
      });
    }
  }