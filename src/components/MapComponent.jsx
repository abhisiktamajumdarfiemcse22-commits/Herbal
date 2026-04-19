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
const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/64/64113.png",
  iconSize: [30,30]
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
        (
          node["amenity"="pharmacy"](around:5000,${lat},${lng});
          node["healthcare"](around:5000,${lat},${lng});
          node["shop"="chemist"](around:5000,${lat},${lng});
        );
        out;
        `;

        const res = await fetch(
          "https://lz4.overpass-api.de/api/interpreter",
          {
            method: "POST",
            body: query,
          }
        );

        const data = await res.json();
        console.log(data.elements);
        const sortedPlaces = (data.elements || []).sort((a, b) => {
            const distA = getDistanceKm(
              lat, lng,
              a.lat, a.lon
            );

            const distB = getDistanceKm(
              lat, lng,
              b.lat, b.lon
            );

            return distA - distB;
          });

          setPlaces(sortedPlaces);
        },

      
      (err) => {
        alert("Location permission denied. Please enable it in browser settings.");
      }
    );
  }, []);

  if (!position) return <p>Loading map...</p>;
  function getDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;

  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1*Math.PI/180) *
    Math.cos(lat2*Math.PI/180) *
    Math.sin(dLon/2) *
    Math.sin(dLon/2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return R * c;
  }
  return (
    <MapContainer center={position} zoom={15} style={{ height: "400px", pointerEvents: "auto" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker
          position={[position[0] + 0.0005, position[1] + 0.0005]}
          icon={userIcon}
      >
          <Popup>You are here</Popup>
      </Marker>

      {places.map((place, i) => (
        <Marker key={i} position={[place.lat, place.lon]}>
          <Popup>
            <div>
              <strong>{place.tags?.name || "Ayurvedic Shop"}</strong>
              <br />
              Distance: {getDistanceKm(
                position[0],
                position[1],
                place.lat,
                place.lon
              ).toFixed(2)} km
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}