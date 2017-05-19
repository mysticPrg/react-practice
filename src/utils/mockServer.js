import getNewId from './getNewId';

const defaultWait = 500;

function makeAsyncFunc(func, wait = 0) {
	return (...args) => {
		return new Promise(resolve => {
			if ( wait <= 0 ) {
				resolve(func(...args));
			} else {
				window.setTimeout(() => {
					resolve(func(...args));
				}, wait);
			}

		});
	};
}

function funcToGenerator(func, wait = defaultWait) {
	
	const asyncFunc = makeAsyncFunc(func, wait);

	return function*(...args) {
		const result = yield asyncFunc(...args).then((payload) => payload);
		return result;
	}
}

/*
function appendGenerators(module) {
	for ( let funcname in module ) {
		module[`${funcname}Await`] = funcToGenerator(module[funcname]);
	}

	return module;
}
*/

const memberData = [{
	id: '000001',
	email: 'temp@temp.com',
	password: 'password data'
}];

export const member = {
	create: funcToGenerator((email, password) => {
		const newMember = {
			id: getNewId(),
			email,
			password
		};

		memberData.push(newMember);
		return newMember;
	}),

	read: funcToGenerator((id) => {
		let foundMember = null;

		memberData.forEach(m => {
			if ( m.id === id ) {
				foundMember = Object.clone(m);
			}
		});

		return foundMember;
	}),

	readAll: funcToGenerator(() => memberData.slice(0, memberData.length))
};

