import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { usePosition } from "@/hooks/usePosition";
import PlaceSearchBox from "@/components/map/PlaceSeachBox";

function Top() {
  const position = usePosition((state) => state.position);

  return (
    <>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100vh", width: "100wh", overflow: "hidden" }}
      >
        <PlaceSearchBox />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>テキスト</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default Top;
