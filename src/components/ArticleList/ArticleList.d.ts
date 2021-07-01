export interface iArticleListProps {
    selectedMarkerProducts: any[];
    zoomToPoint: (product: any) => void;
    setSeen: (product: any) => void;
    seen: string[];
    turnSeen: boolean;
    setTurnSeen: () => void;
  }