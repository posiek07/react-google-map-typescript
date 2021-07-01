import { IArticleCardProps } from "./ArticleCard"
const ArticleCard = ({
  title,
  id,
  zoomToPoint,
  setSeen,
  seen,
}: IArticleCardProps) => {
  return (
    <div
      className="my-1 bg-blue-200 flex justify-between px-10"
      role="listitem"
    >
      {/* We could create card component here that after click would open a modal with selected card state to display details */}
      <h3 className="hover:underline cursor-pointer" onClick={zoomToPoint}>
        {title}
      </h3>
      <img
        onClick={setSeen}
        src="/seen.svg"
        width={30}
        height={30}
        alt={`product-card-button-${id}`}
        className={`${seen ? "opacity-40" : "opacity-100"} cursor-pointer`}
        role="button"
      />
    </div>
  );
};

export default ArticleCard;
