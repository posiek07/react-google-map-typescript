import React, { MutableRefObject } from "react";
import GoogleMapReact, { Coords } from "google-map-react";
import { Location } from "../App";

const Marker = ({
  children,
  key,
  lat,
  lng,
}: {
  children: any;
  key: string;
  lat: number;
  lng: number;
}) => children;

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
}: {
  mapRef: MutableRefObject<any>;
  center: Coords | undefined;
  zoom: number;
  clusters: any[];
  seen: any[];
  mapChangeEvent: (zoom: number, bounds: any, center: Coords) => void;
  setZoomAndListFeatureHandler: (cluster: any) => void;
  setSelectedMarkerProducts: (cluster: Location) => void;
  pointsLength: number;
}) => {
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
          const { cluster: isCluster, point_count: pointCount } =
            cluster.properties;
          if (isCluster) {
            return (
              <Marker
                key={`cluster-${cluster.id}`}
                lat={latitude}
                lng={longitude}
              >
                <div
                  className="flex bg-red-700 rounded-full items-center justify-center"
                  style={{
                    width: `${10 + (pointCount / pointsLength) * 70}px`,
                    height: `${10 + (pointCount / pointsLength) * 70}px`,
                  }}
                  onClick={() => setZoomAndListFeatureHandler(cluster)}
                  id={`cluster-${cluster.id}`}
                >
                  {pointCount}
                </div>
              </Marker>
            );
          }
          return (
            <Marker
              key={`place-${cluster.properties.markerId}`}
              lat={latitude}
              lng={longitude}
            >
              <button
                className={`${
                  seen.includes(cluster.properties.markerId)
                    ? "opacity-40"
                    : "opacity-100"
                }`}
                onClick={() =>
                  setSelectedMarkerProducts({ latitude, longitude })
                }
              >
                <img
                  src={
                    cluster.type === "product"
                      ? "/hang-clothes.svg"
                      : "/diet.svg"
                  }
                  width={30}
                  height={30}
                  alt={`point-${cluster.properties.markerId}`}
                />
              </button>
            </Marker>
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
