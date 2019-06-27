import React from "react";

import { connectReduxDevtools } from "mst-middlewares";

import "./App.css";
import { CalcModel } from "./model/CalcModel";
import { Calc } from "./components/Calc/Calc";

export function App(): JSX.Element {
	const calcState = CalcModel.create({});

	if (process.env.NODE_ENV === "development") {
		connectReduxDevtools(require("remotedev"), calcState);
		(window as any).state = calcState;
		(window as any).mst = require("mobx-state-tree");
	}

	return <Calc state={calcState} />;
}
