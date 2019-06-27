import React from "react";
import { Instance } from "mobx-state-tree";
import { observer } from "mobx-react-lite";

import "./Calc.css";
import { CalcModel } from "../../model/CalcModel";

function _Calc(
	{
		state,
	}: {
		state: Instance<typeof CalcModel>,
	}
): JSX.Element | null {
	return null;
}

export const Calc = observer(_Calc);
