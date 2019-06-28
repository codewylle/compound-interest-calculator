import React from "react";

import "./InputStateless.css";

export function InputStateless({
	label, input, setInput, valid = true, type = "text"
}: {
	label: string,
	input: string,
	setInput?: (input: string) => void,
	valid?: boolean,
	type?: string,
}): JSX.Element | null {
	return (
		<label
			className={[
				`input-stateless`,
				`input-stateless_${valid ? "valid" : "invalid"}`
			].join(" ")}
		>
			<span className="input-stateless__label">{label}</span>
			<input
				className={[
					`input-stateless__input`,
					`input-stateless__input_${setInput ? "rw" : "ro"}`,
				].join(" ")}
				type={type}
				value={input}
				readOnly={!setInput}
				onChange={e => { if (setInput) { setInput(e.target.value); } }}
			/>
		</label>
	);
}
