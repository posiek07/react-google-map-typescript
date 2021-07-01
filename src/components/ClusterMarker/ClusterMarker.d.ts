export interface IClusterMarker {
    pointCount: number;
    pointsLength: number;
    setZoomAndListFeatureHandler: () => void;
    clusterId: string;
    lat: number;
    lng: number;
  }