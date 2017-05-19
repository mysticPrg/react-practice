import React from 'react';

const Card = ({
	id,
	email,
	password
}) => (
	<div className="Card">
		<p>id: {id}</p>
		<p>email: {email}</p>
		<p>pass: {password}</p>
	</div>
);

export default Card;