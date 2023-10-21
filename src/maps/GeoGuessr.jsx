import React, { useState, useEffect } from "react";
import "./geoguessr.css";

// Set different places where the player will be spawned
var places = [
  [{ lat: 60.171001, lng: 24.93935 }, { country: "Finland" }], // Helsinki, Finland
  [{ lat: 48.858093, lng: 2.294694 }, { country: "France" }], // Paris, France
  [{ lat: 51.51002, lng: -0.13473 }, { country: "Great Britain" }], // London, Great Britain
  [{ lat: 41.8902, lng: 12.4922 }, { country: "Italy" }], // Rome, Italy
  [{ lat: 25.195302, lng: 55.272879 }, { country: "United Arab Emirates" }], // Dubai, United Arab Emirates
  [{ lat: 1.283404, lng: 103.863134 }, { country: "Singapore" }], // Marina Bay, Singapore
  [{ lat: 29.976768, lng: 31.135538 }, { country: "Egypt" }], // Cairo, Egypt
  [{ lat: 40.757876, lng: -73.985592 }, { country: "United States" }], // New York, USA
];

const GeoGuessr = ({ chosenCountry }) => {
  const [currentPlace, setCurrentPlace] = useState(
    places[Math.floor(Math.random() * places.length)]
  );
  const [coordinates, setCoordinates] = useState(currentPlace[0]);
  const [country, setCountry] = useState(currentPlace[1].country);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDq2Xb1Ukoowq-vMI34EUxXmFx1TJsPpLc&callback=initialize&libraries=&v=weekly`;
    script.async = true;
    document.body.appendChild(script);
    window.initialize = initialize;
    exposeCountry();
    return () => {
      document.body.removeChild(script);
      delete window.initialize;
    };
  }, [coordinates]);

  const exposeCountry = () => {
    console.log("expose country");
    chosenCountry(country);
  };

  const initialize = () => {
    new window.google.maps.StreetViewPanorama(
      document.getElementById("street-view"),
      {
        position: coordinates,
        pov: { heading: 165, pitch: 0 },
        zoom: 1,
      }
    );
  };

  return (
    <div>
      <div id="floating-panel">
        <h1>Guess where we are!</h1>
      </div>
      <div id="street-view" style={{ height: "100vh" }}></div>
    </div>
  );
};

export default GeoGuessr;
