import { useState, useEffect } from "react";
import { LocationCoords } from "../components/Map/Map";


export default function useSelectedPoints({
  clusterProducts,
  data,
}: {
  clusterProducts: any[];
  data: any[];
}) {
  const [selectedMarkerProducts, setSelectedMarkerProducts] = useState<any[]>(
    []
  );

  useEffect(() => {
    setSelectedMarkerProducts(clusterProducts);
  }, [clusterProducts]);

  // Initial Loading of full list. Trigger only once on first load.
  useEffect(() => {
    setSelectedMarkerProducts(data);
  }, [data]);

  const setSelectedMarkerHandler = ({ latitude, longitude }: LocationCoords) => {
    setSelectedMarkerProducts(
      data.filter(
        (marker: { location: LocationCoords }) =>
          marker.location.latitude === latitude &&
          marker.location.longitude === longitude
      )
    );
  };

  return { selectedMarkerProducts, setSelectedMarkerHandler };
}
