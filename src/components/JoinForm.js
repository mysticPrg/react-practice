import React from 'react';

const JoinForm = ({
	email,
	password,
	inProgressing,

	onFormUpdate,
	onRequestJoin
}) => {
	let emailInput = null;
	let passInput = null;
	const disabled = email === '' || password === '' || inProgressing;

	return (
		<div className="JoinForm">
			<input
				type="text"
				placeholder="email"
				value={email}
				ref={ref => emailInput = ref}
				onChange={() => onFormUpdate(emailInput.value, password)}
			/>
			<input
				type="password"
				placeholder="pass"
				value={password}
				ref={ref => passInput = ref}
				onChange={() => onFormUpdate(email, passInput.value)}
			/>
			<button
				onClick={() => onRequestJoin(email, password)}
				disabled={disabled}
			>
				Join!
			</button>
		</div>
	);
};

export default JoinForm;