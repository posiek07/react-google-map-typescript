import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { Coords } from "google-map-react";
import useSupercluster from "use-supercluster";
import { BBox } from "geojson";
import { fetcher, getPoints } from "./helpers/helper";
import ArticleList from "./components/ArticleList";
import Map from "./components/Map";

export interface Location {
  latitude: number;
  longitude: number;
}

function App() {
  // STATE VALUES
  const mapRef = useRef<null | any>();
  const [bounds, setBounds] = useState<BBox>();
  const [zoom, setZoom] = useState(10);
  const [center, setCenter] = useState<Coords>();
  const [selectedMarkerProducts, setSelectedMarkerProducts] = useState<any[]>(
    []
  );
  const [seen, setSeen] = useState<any[]>([]);
  const [turnSeen, setTurnSeen] = useState<boolean>(true);

  const { data, error, isValidating } = useSWR(
    "https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v4.json",
    { fetcher }
  );

  useEffect(() => {
    // fetching all list for the testing needs or delete useEffect and render only list from selected point or cluster
    setSelectedMarkerProducts(data);
  }, [data]);

  const markers = data && !error ? data : [];

  const points = getPoints(markers, turnSeen, seen);

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 100, maxZoom: 22 },
  });

  // HANDLERS FUNCTIONS

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
    setSelectedMarkerProducts(newSelectedProducts);
  };

  const setSelectedMarkerProductsHandler = ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) => {
    setSelectedMarkerProducts(
      markers.filter(
        (marker: { location: Location }) =>
          marker.location.latitude === latitude &&
          marker.location.longitude === longitude
      )
    );
  };

  const setSeenHandler = (product: any) =>
    setSeen((previousState) => {
      if (previousState.includes(product.id)) {
        return previousState.filter((id) => id !== product.id);
      }
      return [...previousState, product.id];
    });

  const zoomToPointHandler = (product: any) => {
    setCenter({
      lat: product.location.latitude,
      lng: product.location.longitude,
    });
    setZoom(20);
  };

  const setTurnSeenHandler = () => setTurnSeen((prevState) => !prevState);

  if (isValidating) {
    return <h1>LOADING</h1>;
  }

  return (
    <div className="flex flex-col md:flex-row">
      <ArticleList
        seen={seen}
        selectedMarkerProducts={selectedMarkerProducts}
        setSeen={setSeenHandler}
        zoomToPoint={zoomToPointHandler}
        setTurnSeen={setTurnSeenHandler}
        turnSeen={turnSeen}
      />
      <Map
        pointsLength={points.length}
        center={center}
        clusters={clusters}
        mapRef={mapRef}
        seen={seen}
        setZoomAndListFeatureHandler={setZoomAndListFeatureHandler}
        mapChangeEvent={mapChangeEventHandler}
        zoom={zoom}
        setSelectedMarkerProducts={setSelectedMarkerProductsHandler}
      />
    </div>
  );
}

export default App;
