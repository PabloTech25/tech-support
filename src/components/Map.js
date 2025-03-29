import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function Map() {
  const location = { lat: -34.6037, lng: -58.3816 };

  return (
    <LoadScript googleMapsApiKey="TU_API_KEY">
      <GoogleMap mapContainerStyle={{ height: "400px", width: "100%" }} zoom={15} center={location}>
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
}
