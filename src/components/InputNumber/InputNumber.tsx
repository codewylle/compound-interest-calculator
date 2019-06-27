import React from "react";
import { Instance } from "mobx-state-tree";
import { observer } from "mobx-react-lite";

import "./InputNumber.css";
import { InputNumberModel } from "../../model/InputNumberModel";

function _InputNumber(
	{
		state,
	}: {
		state: Instance<typeof InputNumberModel>,
	}
): JSX.Element | null {
	return null;
}

export const InputNumber = observer(_InputNumber);
