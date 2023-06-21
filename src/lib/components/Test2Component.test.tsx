import Test2Component from "./Test2Component";

import { render, screen } from "@testing-library/react";

describe("Test2Component", () => {
	it("text will be shown when rendered", () => {
		render(<Test2Component />);
		expect(screen.getByText(`Welcome Jane!`)).toBeInTheDocument();
	});
});
