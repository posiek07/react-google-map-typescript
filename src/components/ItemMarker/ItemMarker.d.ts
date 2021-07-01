export interface IItemMarkerProps {
  clusterId: string;
  clusterType: string;
  setSelectedMarkerProducts: () => void;
  seen: boolean;
  lat: number;
  lng: number;
}
