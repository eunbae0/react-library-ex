import ReactDOM from "react-dom";
import { TestComponent, Test2Component } from "@eunbae/react-library-ex";
import React from "react";

ReactDOM.render(
	<>
		<TestComponent />
		<Test2Component />
	</>,
	document.getElementById("root") as HTMLElement
);
