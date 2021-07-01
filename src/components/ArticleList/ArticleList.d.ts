import { Product } from "../../helpers/helper";

export interface iArticleListProps {
    selectedMarkerProducts: Product[];
    zoomToPoint: (product: Product) => void;
    setSeen: (product: Product) => void;
    seen: string[];
    turnSeen: boolean;
    setTurnSeen: () => void;
  }