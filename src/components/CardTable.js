import React from 'react';

import './CardTable.css';
import Card from './Card';

const CardTable = ({
	members,
}) => {
	const cardElms = members.map((card, i) => (
		<Card
			key={i}
			id={card.id}
			email={card.email}
			password={card.password}
		/>
	));

	return (
		<div className="CardTable">
			{cardElms}
		</div>
	);
};

export default CardTable;