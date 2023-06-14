import { render } from "preact";
import { TestComponent } from "../dist/my-lib.js";

render(
	<>
		<TestComponent />
		<TestComponent />
	</>,
	document.getElementById("root") as HTMLElement
);
