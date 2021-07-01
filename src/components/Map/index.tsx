import GoogleMapReact from "google-map-react";
import { LocationCoords } from "../../App";
import ItemMarker from "../ItemMarker/index";
import ClusterMarker from "../ClusterMarker/index";
import { iMapProps } from "./Map";


const Map = ({
  mapRef,
  center,
  zoom,
  clusters,
  seen,
  mapChangeEvent,
  setZoomAndListFeatureHandler,
  setSelectedMarkerProducts,
  pointsLength,
}: iMapProps) => {
  return (
    <div
      className="flex flex-1 h-[50vh] min-h-[50vh] md:min-h-[100vh]"
      style={{ width: "100%" }}
    >
      <GoogleMapReact
        // install dotenv and write REACT_APP_MAP_TOKEN={your api key} in .env file in root folder OR just copy and paste your GoogleMap API key
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_TOKEN!! }}
        defaultCenter={{ lat: 51.7876, lng: -3.757171 }}
        defaultZoom={7}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
        center={center}
        onChange={({ zoom, bounds, center }) =>
          mapChangeEvent(zoom, bounds, center)
        }
        zoom={zoom}
      >
        {clusters.map((cluster: any) => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const coords: LocationCoords = { latitude, longitude }
          const { cluster: isCluster, point_count: pointCount } =
            cluster.properties;
          if (isCluster) {
            return (
              <ClusterMarker
                key={`cluster-${cluster.id}`}
                lat={latitude}
                lng={longitude}
                pointCount={pointCount}
                pointsLength={pointsLength}
                setZoomAndListFeatureHandler={() =>
                  setZoomAndListFeatureHandler(cluster)
                }
                clusterId={cluster.id}
              />
            );
          }
          return (
            <ItemMarker
              lat={latitude}
              lng={longitude}
              key={`place-${cluster.properties.markerId}`}
              clusterId={cluster.properties.markerId}
              clusterType={cluster.type}
              seen={seen.includes(cluster.id)}
              setSelectedMarkerProducts={() =>
                setSelectedMarkerProducts(coords)
              }
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
