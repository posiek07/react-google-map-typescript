export const getPoints = (markers: any, turnSeen: boolean, seen: string[]) =>
  markers.map(
    (marker: {
      id: any;
      section: any;
      user: { id: any };
      status: any;
      location: { longitude: string; latitude: string };
    }) =>
      turnSeen
        ? // flilters seen artcile markers from the map
          !seen.includes(marker.id) && {
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
              coordinates: [
                parseFloat(marker.location.longitude),
                parseFloat(marker.location.latitude),
              ],
            },
          }
        : {
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
              coordinates: [
                parseFloat(marker.location.longitude),
                parseFloat(marker.location.latitude),
              ],
            },
          }
  );

export const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init);
  return res.json();
};
