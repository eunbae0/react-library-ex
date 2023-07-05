import TestComponent from "./TestComponent";

import { render, screen } from "@testing-library/react";

describe("TestComponent", () => {
	it("text will be shown when rendered", () => {
		render(<TestComponent />);
		expect(screen.getByText(`Welcome Jane!`)).toBeInTheDocument();
	});
});
