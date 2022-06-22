coordinates={};

$(document).ready(function () {
    getCoordinates()
  });
  
  function getCoordinates() {
    var searchParams = new URLSearchParams(window.location.search);
    console.log(searchParams);
    if (searchParams.has("source") && searchParams.has("destination")) {
      var source = searchParams.get("source");
      console.log(source);
      var destination = searchParams.get("destination");
  
      coordinates.source_lat = source.split(";")[0];
      console.log(coordinates.source_lat);
  
      coordinates.source_long = source.split(";")[1];
      console.log(coordinates.source_long);
  
      coordinates.destination_lat = destination.split(";")[0];
      console.log(coordinates.destination_lat);
  
      coordinates.destination_long = destination.split(";")[1];
      console.log(coordinates.destination_long);
    } else {
      alert("co-ordinates are not selected");
      window.history.back();
    }
  }