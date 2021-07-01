import { getByAltText, render, within } from "@testing-library/react";
import ArticleList from "../index";
import data from "../../../mocks/data.json";

describe("ArticleList", () => {
  it("render the items and check dynamically if they display correctly", async () => {
    let items = JSON.stringify(data);
    let products = JSON.parse(items);

    const seen = ["3899651"];

    const { getAllByRole } = render(
      <ArticleList
        selectedMarkerProducts={products}
        seen={seen}
        setSeen={jest.fn()}
        setTurnSeen={jest.fn()}
        turnSeen={false}
        zoomToPoint={jest.fn()}
      />
    );

    const listItems = getAllByRole("listitem");
    expect(listItems).toHaveLength(25);

    listItems.forEach((item, index) => {
      const { getByText } = within(item);
      const { title, id } = products[index];
      const imgButton: HTMLElement = getByAltText(item, "product-card-button", {
        exact: false,
      });

      // Clear whitespaces
      const trimmedText = title.trim();

      const text = getByText(trimmedText, { exact: false });
      expect(text).toBeInTheDocument();
      seen.includes(id)
        ? expect(imgButton).toHaveClass("opacity-40")
        : expect(imgButton).toHaveClass("opacity-100");
    });
  });
});
