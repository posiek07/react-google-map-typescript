export const getPoints = (
  product: Product[],
  turnSeen: boolean,
  seen: string[]
) =>
  product.map((marker: Product) =>
    turnSeen
      ? // flilters seen artcile product markers from the map
        !seen.includes(marker.id) && createPoint(marker)
      : createPoint(marker)
  );

export const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init);
  return res.json();
};

const createPoint = (marker: Product) => {
  return {
    type: marker.section,
    properties: {
      cluster: false,
      markerId: marker.id,
      userId: marker.user.id,
      category: marker.status,
      product: marker,
    },
    geometry: {
      type: "Point",
      coordinates: [marker.location.longitude, marker.location.latitude],
    },
  };
};

export interface Product {
  id: string;
  section: string;
  user: { id: string };
  title: string;
  status: string;
  location: { longitude: number; latitude: number };
}
