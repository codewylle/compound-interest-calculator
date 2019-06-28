import React from "react";
import { Instance } from "mobx-state-tree";
import { observer } from "mobx-react-lite";

import "./Calc.css";
import { CalcModel } from "../../model/CalcModel";

import { InputNumber } from "../InputNumber/InputNumber";
import { InputStateless } from "../InputStateless/InputStateless";

function _Calc({
	state,
}: {
	state: Instance<typeof CalcModel>,
}): JSX.Element | null {
	return (
		<form className="calc" onSubmit={e => e.preventDefault()}>
			<h1 className="calc__header">Кредитный калькулятор</h1>
			<InputNumber label="Тело кредита" state={state.primaryLoan} />
			<InputNumber label="Ежемесячный платёж" state={state.monthlyPayment} />
			<InputNumber label="Срок в месяцах" state={state.numberOfMonths} />
			<br />
			<InputStateless
				label="Простой процент" input={state.yearlySimpleInterestFormatted} />
			<InputStateless
				label="Сложный процент" input={state.yearlyCompoundInterestFormatted} />
		</form>
	)
}

export const Calc = observer(_Calc);
