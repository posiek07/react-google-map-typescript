import { render } from "@testing-library/react";
import ArticleCard from "../index";

let product = {
  id: "10",
  title: "My title",
  seen: true,
};

describe("ArticleCard", () => {
  it("should render item and it should show seen icon with lower opacity", () => {
    const { getByRole, getByText } = render(
      <ArticleCard
        id={product.id}
        seen={product.seen}
        setSeen={jest.fn()}
        title={product.title}
        zoomToPoint={jest.fn}
        key={product.id}
      />
    );

    const headingText = getByText(product.title);
    expect(headingText).toBeInTheDocument();

    const buttonImg = getByRole("button");
    expect(buttonImg).toHaveClass("opacity-40");
  });
});
