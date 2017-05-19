export default function getNewId() {
	getNewId.store = getNewId.store || {};

	let n = 0;
	let id = null;

	do {
		n = Math.floor(Math.random() * 1000000);
		id = n.toString();

		while ( id.length < 6 ) {
			id = '0' + id;
		}
	}
	while ( getNewId.store[id] );

	getNewId.store[id] = true;

	return id;
};
