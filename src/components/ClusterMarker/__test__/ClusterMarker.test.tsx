import { render } from "@testing-library/react";
import ClusterMarker from "../index";

let cluster = {
    id: "10",
    type: "product",
    pointCount: 10,
    pointsLength: 10,
};

describe("Cluster Marker", () => {
    it("should render item and it should show the right cluster count", () => {
        const { getByRole, getByTestId, getByText } = render(
            <ClusterMarker
                clusterId={cluster.id}
                pointCount={cluster.pointCount}
                pointsLength={cluster.pointsLength}
                lat={10}
                lng={10}
                key={cluster.id}
                setZoomAndListFeatureHandler={jest.fn()}
            />
        );
        const clusterDiv = getByText(cluster.pointCount)
        expect(clusterDiv).toHaveTextContent(cluster.pointCount.toString());
    });
});
