import { useState, useRef, useEffect } from "react";
import { BBox } from "geojson";
import { Coords } from "google-map-react";
import useSupercluster from "use-supercluster";
import { fetcher, getPoints, Product } from "../helpers/helper";
import useSWR from "swr";

export default function useMaps({
  seen,
  turnSeen,
}: {
  seen: string[];
  turnSeen: boolean;
}) {
  const mapRef = useRef<null | any>();
  const [bounds, setBounds] = useState<BBox>();
  const [zoom, setZoom] = useState<number>(10);
  const [center, setCenter] = useState<Coords>();
  const [points, setPoints] = useState<Product[]>([]);
  const [clusterProducts, setClusterProducts] = useState([]);

  const { data, error, isValidating } = useSWR(
    "https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v4.json",
    { fetcher }
  );

  useEffect(() => {
    !!data &&
      !error &&
      data.length > 0 &&
      //@ts-ignore
      setPoints(getPoints(data, turnSeen, seen));
  }, [turnSeen, seen, data, error]);

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 100, maxZoom: 22 },
  });

  const mapChangeEventHandler = (zoom: number, bounds: any, center: Coords) => {
    setCenter(center);
    setZoom(zoom);
    setBounds([bounds.nw.lng, bounds.se.lat, bounds.se.lng, bounds.nw.lat]);
  };

  const setZoomAndListFeatureHandler = (cluster: any) => {
    const [longitude, latitude] = cluster.geometry.coordinates;
    const expansionZoom = Math.min(
      supercluster.getClusterExpansionZoom(cluster.id),
      20
    );
    mapRef.current.setZoom(expansionZoom);
    mapRef.current.panTo({ lat: latitude, lng: longitude });
    let leaves = supercluster.getLeaves(cluster.id, Infinity, 0);
    const newSelectedProducts = leaves.map(
      (leave: any) => leave.properties.product
    );
    setClusterProducts(newSelectedProducts);
  };

  const zoomToPointHandler = (product: any) => {
    setCenter({
      lat: product.location.latitude,
      lng: product.location.longitude,
    });
    setZoom(20);
  };

  return {
    mapRef,
    clusters,
    center,
    zoom,
    mapChangeEventHandler,
    setZoomAndListFeatureHandler,
    zoomToPointHandler,
    clusterProducts,
    points,
    isValidating,
    data,
  };
}
