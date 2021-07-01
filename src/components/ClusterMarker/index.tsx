import {IClusterMarker} from './ClusterMarker'

const ClusterMarker = ({
  pointCount,
  pointsLength,
  setZoomAndListFeatureHandler,
  clusterId,
  lat,
  lng,
}: IClusterMarker) => {
  return (
    <div
      className="flex bg-red-700 rounded-full items-center justify-center"
      style={{
        width: `${10 + (pointCount / pointsLength) * 70}px`,
        height: `${10 + (pointCount / pointsLength) * 70}px`,
      }}
      onClick={setZoomAndListFeatureHandler}
      id={`cluster-${clusterId}`}
    >
      {pointCount}
    </div>
  );
};

export default ClusterMarker;
