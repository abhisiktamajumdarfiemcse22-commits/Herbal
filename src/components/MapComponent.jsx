"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";

// Fix marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

export default function MapComponent() {
  const [position, setPosition] = useState(null);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(

      
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        setPosition([lat, lng]);

        const query = `
          [out:json];
          node["shop"~"chemist|herbal"](around:5000, ${lat}, ${lng});
          out;
        `;

        const res = await fetch(
          "https://overpass-api.de/api/interpreter",
          {
            method: "POST",
            body: query,
          }
        );

        const data = await res.json();
        setPlaces(data.elements || []);
      },

      
      (err) => {
        alert("Location permission denied. Please enable it in browser settings.");
      }
    );
  }, []);

  if (!position) return <p>Loading map...</p>;

  return (
    <MapContainer center={position} zoom={13} style={{ height: "400px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>

      {places.map((place, i) => (
        <Marker key={i} position={[place.lat, place.lon]}>
          <Popup>{place.tags?.name || "Ayurvedic Shop"}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}