import { fetchPlaces } from "@/hooks/fetchPlaces";
import { usePosition } from "@/hooks/usePosition";
import { PlacesApiResponse } from "@/types/PlacesApiResponse";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";

function PlaceSearchBox() {
  const [query, setQuery] = useState("");
  const updatePosition = usePosition((state) => state.updatePosition);
  const map = useMap();
  const { data, refetch } = useQuery<PlacesApiResponse>({
    queryKey: ["places"],
    queryFn: async () => fetchPlaces(query),
    enabled: false,
  });

  const handleSearchClick = () => {
    refetch();
  };

  useEffect(() => {
    if (!data) return;

    const lat = data.places[0].location.latitude;
    const lng = data.places[0].location.longitude;

    map.flyTo({
      lat: lat,
      lng: lng,
    });
    updatePosition({
      lat: lat,
      lng: lng,
    });
  }, [data]);

  return (
    <div className="leaflet-top leaflet-left">
      <div
        className="leaflet-control"
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <InputGroup size={"md"}>
          <Input
            pr={"4.5rem"}
            type="text"
            placeholder="東京タワー"
            variant={"filled"}
            onInput={(e) => setQuery(e.currentTarget.value)}
          />
          <InputRightElement width={"4.5rem"}>
            <Button onClick={handleSearchClick}>検索</Button>
          </InputRightElement>
        </InputGroup>
      </div>
    </div>
  );
}

export default PlaceSearchBox;
