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
const pharmacyIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/4320/4320371.png",
  iconSize: [30, 30]
});

const hospitalIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2967/2967350.png",
  iconSize: [30, 30]
});
export default function MapComponent() {
  const [position, setPosition] = useState(null);
  const [places, setPlaces] = useState([]);
  const [filter, setFilter] = useState("all");
  const [travelInfo, setTravelInfo] = useState({});
  const [loadingRoute, setLoadingRoute] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(

      
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        setPosition([lat, lng]);
        try {
           const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_KEY;
           console.log("Geoapify Key:", apiKey);
            console.log("Latitude:", lat);
            console.log("Longitude:", lng);

          const categories = [
            "healthcare.pharmacy",
            "healthcare.hospital"
          ].join(",");

          const url =
            `https://api.geoapify.com/v2/places?` +
            `categories=${categories}` +
            `&filter=circle:${lng},${lat},5000` +
            `&bias=proximity:${lng},${lat}` +
            `&limit=30` +
            `&apiKey=${apiKey}`;

            console.log(url);
          const res = await fetch(url);
          console.log("Status:", res.status);

          if (!res.ok) {
            console.error(await res.text());
            return;
          }

          const data = await res.json();
          console.log(data);

          console.log(data);

          const sortedPlaces = (data.features || []).sort((a, b) => {
            const distA = getDistanceKm(
              lat,
              lng,
              a.properties.lat,
              a.properties.lon
            );

            const distB = getDistanceKm(
              lat,
              lng,
              b.properties.lat,
              b.properties.lon
            );

            return distA - distB;
          });

          setPlaces(sortedPlaces);
          if (position) {
                sortedPlaces.slice(0, 3).forEach((place) => {
                    getTravelInfo(place);
                });
           }

        }
        catch (err) {
          console.error(err);
        }
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
  async function getTravelInfo(place) {
      if (!position || !Array.isArray(position) || position.length < 2) return;
  // Don't fetch again if we already have it
      if (travelInfo[place.properties.place_id]) return;
      setLoadingRoute(prev => ({
          ...prev,
          [place.properties.place_id]: true
      }));

      try {

        const response = await fetch(
          `https://api.geoapify.com/v1/routing?waypoints=${position[0]},${position[1]}|${place.properties.lat},${place.properties.lon}&mode=drive&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_KEY}`
        );

        const data = await response.json();

        if (data.features?.length) {

          setTravelInfo(prev => ({
            ...prev,
            [place.properties.place_id]: {
              distance: (
                data.features[0].properties.distance / 1000
              ).toFixed(2),

              time: Math.ceil(
                data.features[0].properties.time / 60
              )
            }
          }));
          setLoadingRoute(prev => ({
              ...prev,
              [place.properties.place_id]: false
          }));

        }

      } catch (err) {
          console.error("Routing Error:", err);

          setLoadingRoute(prev => ({
              ...prev,
              [place.properties.place_id]: false
          }));
      }
    }
  return (
    <>
  <div
    style={{
      display: "flex",
      gap: "10px",
      marginBottom: "10px"
    }}
  >
    <button onClick={() => setFilter("all")}>
      All
    </button>

    <button onClick={() => setFilter("pharmacy")}>
      💊 Pharmacy
    </button>

    <button onClick={() => setFilter("hospital")}>
      🏥 Hospital
    </button>
  </div>
    <div style={{ position: "relative" }}>

        <MapContainer
            center={position}
            zoom={15}
            style={{
                height: "400px",
                pointerEvents: "auto"
            }}
        >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker
          position={[position[0] + 0.0005, position[1] + 0.0005]}
          icon={userIcon}
      >
          <Popup>You are here</Popup>
      </Marker>

      {places
        .filter(place => {

            if(filter==="all") return true;

            const cats = place.properties.categories || [];

            if(filter==="pharmacy")
                return cats.includes("healthcare.pharmacy");

            if(filter==="hospital")
                return cats.includes("healthcare.hospital");

            return true;
        })
        .map((place, i) => (
            <Marker
                key={i}
                position={[
                    place.properties.lat,
                    place.properties.lon
                ]}
                icon={
                    place.properties.categories?.includes("healthcare.pharmacy")
                        ? pharmacyIcon
                        : hospitalIcon
                }
                eventHandlers={{
                    click: () => getTravelInfo(place)
                }}
            >
              <Popup>
                <strong>
                  {place.properties.name || "Medical Store"}
                </strong>
                <br />

                    <span
                      style={{
                        color:
                          place.properties.categories?.includes("healthcare.pharmacy")
                            ? "green"
                            : "red",
                        fontWeight: "bold"
                      }}
                    >
                      {place.properties.categories?.includes("healthcare.pharmacy")
                        ? "💊 Pharmacy"
                        : "🏥 Hospital"}
                    </span>

                <br />
                {i === 0 && (
                  <>
                    <br />
                    <span
                      style={{
                        color: "green",
                        fontWeight: "bold"
                      }}
                    >
                      ⭐ Nearest Place
                    </span>
                  </>
                )}

                <br />

                {place.properties.formatted}

                <br /><br />

                {loadingRoute[place.properties.place_id] ? (

                    <span style={{ color: "orange", fontWeight: "bold" }}>
                      🚗 Calculating route...
                    </span>

                  ) : travelInfo[place.properties.place_id] ? (

                    <>
                      <strong>Road Distance:</strong>{" "}
                      {travelInfo[place.properties.place_id].distance} km

                      <br />

                      <strong>Estimated Time:</strong>{" "}
                      {travelInfo[place.properties.place_id].time} min
                    </>

                  ) : (

                    <>
                      <strong>Distance:</strong>{" "}
                      {getDistanceKm(
                        position[0],
                        position[1],
                        place.properties.lat,
                        place.properties.lon
                      ).toFixed(2)} km
                    </>

                )}

                <br /><br />

                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${place.properties.lat},${place.properties.lon}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🚗 Get Directions
                </a>

                <br />

               <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    place.properties.name || place.properties.formatted
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📍 Open in Google Maps
                </a>
              </Popup>
            </Marker>
   ))}
   </MapContainer>
   <div
  style={{
    position: "absolute",
    top: "10px",
    right: "10px",
    width: "240px",
    background: "white",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    zIndex: 1000,
    fontSize: "13px",
  }}
>
  <h4 style={{ margin: "0 0 8px 0" }}>📍 Nearest Places</h4>

  {places.slice(0, 3).map((place, index) => (
    <div
      key={place.properties.place_id}
      style={{
        marginBottom: "8px",
        paddingBottom: "6px",
        borderBottom:
          index !== 2 ? "1px solid #ddd" : "none",
      }}
    >
      <strong>
        {index + 1}. {place.properties.name || "Unknown"}
      </strong>

      <br />

      {place.properties.categories?.includes("healthcare.pharmacy")
        ? "💊 Pharmacy"
        : "🏥 Hospital"}

      <br />

      {travelInfo[place.properties.place_id] ? (
        <>
          🚗 {travelInfo[place.properties.place_id].distance} km
          <br />
          🕒 {travelInfo[place.properties.place_id].time} min
        </>
      ) : (
        <>
          📍{" "}
          {getDistanceKm(
            position[0],
            position[1],
            place.properties.lat,
            place.properties.lon
          ).toFixed(2)}{" "}
          km
        </>
      )}
    </div>
  ))}
</div>

</div>

</>

);
}