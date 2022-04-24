import { useEffect, useState } from "react";

export default function useGoogleApi() {
  const [position, setPosition] = useState();
  const [googleScriptsLoaded, setGoogleScriptsLoaded] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    document
      .getElementById("google-apis-script")
      .addEventListener("load", () => {
        setGoogleScriptsLoaded(true);
      });
  }, []);

  useEffect(() => {
    // ue runs only in browser
    navigator.geolocation.getCurrentPosition((pos) =>
      setPosition({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      })
    );
  }, []);

  useEffect(() => {
    if (position && googleScriptsLoaded) {
      const center = { lat: position.lat, lng: position.lng };
      // Create a bounding box with sides ~10km away from the center point
      const defaultBounds = {
        north: center.lat + 0.1,
        south: center.lat - 0.1,
        east: center.lng + 0.1,
        west: center.lng - 0.1,
      };
      const input = document.getElementById("google-auto-complete");
      const options = {
        bounds: defaultBounds,
        fields: ["address_components", "name", "place_id", "photos"],
        strictBounds: false,
        types: ["restaurant"],
      };
      const AutoComplete = new google.maps.places.Autocomplete(input, options);
      AutoComplete.addListener("place_changed", () => {
        const place = AutoComplete.getPlace();
        setImage(place.photos[0].getUrl());
      });
    }
  }, [position, googleScriptsLoaded]);

  return image;
}
