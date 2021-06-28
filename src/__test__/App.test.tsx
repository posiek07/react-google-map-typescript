import { render, waitFor, fireEvent } from "@testing-library/react";
import App from "../App";

describe("test if list renders correctly", () => {
  it("should render App with LOADING and after fetching an Artcicle List and check if the buttons with futntions fire events correctly", async () => {
    const app = render(<App />);

    const isLoading = app.getByText("LOADING");
    expect(isLoading).toBeInTheDocument();

    const buttonSetOnOffSeen = await waitFor(() => app.getByText(/the map/i));
    const articleList = await waitFor(() => app.getByRole("list"));
    const listItems = await waitFor(() => app.getAllByRole("listitem"));
    const seenButton = await waitFor(() =>
      app.getAllByAltText("product-card-button", { exact: false })
    );

    expect(listItems).toHaveLength(25);
    expect(articleList).toBeInTheDocument();
    expect(buttonSetOnOffSeen).toBeInTheDocument();

    fireEvent.click(seenButton[0]);
    expect(seenButton[0]).toHaveClass("opacity-40");
    fireEvent.click(seenButton[0]);
    expect(seenButton[0]).toHaveClass("opacity-100");

    expect(buttonSetOnOffSeen).toHaveTextContent("OFF");
    fireEvent.click(buttonSetOnOffSeen);
    expect(buttonSetOnOffSeen).toHaveTextContent("ON");
  });
});
