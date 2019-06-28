import React from "react";
import { Instance } from "mobx-state-tree";
import { observer } from "mobx-react-lite";

import "./InputNumber.css";
import { InputNumberModel } from "../../model/InputNumberModel";
import { InputStateless } from "../InputStateless/InputStateless";

function _InputNumber({
	label, state
}: {
	label: string,
	state: Instance<typeof InputNumberModel>,
}): JSX.Element | null {
	return (
		<InputStateless
			label={label}
			input={state.input}
			setInput={state.setInput}
			valid={state.valid}
			type="number"
		/>
	);
}

export const InputNumber = observer(_InputNumber);
