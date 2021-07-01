import { useState, useEffect } from "react";
import { LocationCoords } from "../components/Map/Map";
import { Product } from "../helpers/helper";


export default function useSelectedPoints({
  clusterProducts,
  data,
}: {
  clusterProducts: any[];
  data: Product[];
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
        (product: Product) =>
          product.location.latitude === latitude &&
          product.location.longitude === longitude
      )
    );
  };

  return { selectedMarkerProducts, setSelectedMarkerHandler };
}
