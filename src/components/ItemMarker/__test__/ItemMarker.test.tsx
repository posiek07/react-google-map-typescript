import { render } from "@testing-library/react";
import ItemMarker from "../index";

let cluster = {
    id: "10",
    type: "product",
};

describe("Item Marker", () => {
    it("should render item and it should show seen icon with 40% opacity", () => {
        const { getByRole } = render(
            <ItemMarker
                clusterId={cluster.id}
                clusterType={cluster.type}
                seen={true}
                lat={10}
                lng={10}
                setSelectedMarkerProducts={jest.fn()}
                key={cluster.id}
            />
        );

        const buttonImg = getByRole("button");
        expect(buttonImg).toHaveClass("opacity-40");

        const img = getByRole("img")
        expect(img).toBeInTheDocument()

    });
});
