export interface IArticleCardProps {
    title: string;
    id: string;
    zoomToPoint: () => void;
    setSeen: () => void;
    seen: boolean;
}