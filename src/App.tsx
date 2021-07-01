import ArticleList from "./components/ArticleList/index";
import Map from "./components/Map/index";
import useSeen from "./hooks/useSeen";
import useMaps from "./hooks/useMaps";
import useSelectedPoints from "./hooks/useFetchPoints";

function App() {
  const { seen, setSeenHandler, turnSeen, setTurnSeenHandler } = useSeen();
  const {
    points,
    mapRef,
    clusters,
    center,
    zoom,
    mapChangeEventHandler,
    setZoomAndListFeatureHandler,
    zoomToPointHandler,
    clusterProducts,
    isValidating,
    data,
  } = useMaps({ seen, turnSeen });
  const { selectedMarkerProducts, setSelectedMarkerHandler } =
    useSelectedPoints({ clusterProducts, data });

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
        setSelectedMarkerProducts={setSelectedMarkerHandler}
      />
    </div>
  );
}

export default App;
