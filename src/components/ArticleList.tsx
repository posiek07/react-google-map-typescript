import ArticleCard from "./ArticleCard";

const ArticleList = ({
  selectedMarkerProducts,
  zoomToPoint,
  setSeen,
  seen,
  turnSeen,
  setTurnSeen,
}: {
  selectedMarkerProducts: any[];
  zoomToPoint: (product: any) => void;
  setSeen: (product: any) => void;
  seen: string[];
  turnSeen: boolean;
  setTurnSeen: () => void;
}) => {
  return (
    ///* that could be also some nice card list */
    <div className="flex flex-col flex-1 overflow-auto h-[50vh] max-h-[50vh] md:min-h-[100vh]">
      <button
        type="button"
        onClick={() => setTurnSeen()}
        className="w-100 justify-center bg-yellow-600 rounded-full"
      >
        Seen {!turnSeen ? "ON" : "OFF"} the map
      </button>
      <div className="flex flex-col" role="list">
        {!!selectedMarkerProducts &&
          selectedMarkerProducts.map(
            (product: {
              location: { latitude: any; longitude: any };
              title: string;
              id: any;
            }) => (
              <ArticleCard
                key={product.id}
                id={product.id}
                title={product.title}
                zoomToPoint={() => zoomToPoint(product)}
                setSeen={() => setSeen(product)}
                seen={seen.includes(product.id)}
              />
            )
          )}
      </div>
    </div>
  );
};

export default ArticleList;
