export interface LocationCoords {
    latitude: number;
    longitude: number;
}
  
export interface iMapProps {
    mapRef: MutableRefObject<any>;
    center: Coords | undefined;
    zoom: number;
    clusters: any[];
    seen: any[];
    mapChangeEvent: (zoom: number, bounds: any, center: Coords) => void;
    setZoomAndListFeatureHandler: (cluster: any) => void;
    setSelectedMarkerProducts: (cluster: LocationCoords) => void;
    pointsLength: number;
}