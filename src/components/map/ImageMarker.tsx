import { Marker, Popup } from "react-leaflet";

type propsType = {
  url: string;
  context: string;
  position: [number, number];
};

function ImageMarker(props: propsType) {
  return (
    <Marker position={props.position}>
      <img src={props.url} width={"420px"} height={"420px"} />
      <Popup>{props.context}</Popup>
    </Marker>
  );
}

export default ImageMarker;
