import { IItemMarkerProps } from "./ItemMarker";

const ItemMarker = ({
  clusterId,
  clusterType,
  setSelectedMarkerProducts,
  seen,
  lat,
  lng,
}: IItemMarkerProps) => {
  return (
    <>
      <button
        className={`${seen ? "opacity-40" : "opacity-100"}`}
        onClick={setSelectedMarkerProducts}
      >
        <img
          src={clusterType === "product" ? "/hang-clothes.svg" : "/diet.svg"}
          width={30}
          height={30}
          alt={`point-${clusterId}`}
        />
      </button>
    </>
  );
};

export default ItemMarker;
