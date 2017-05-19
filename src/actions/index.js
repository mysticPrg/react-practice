import * as types from './ActionTypes';

export const in_progressing = () => ({
	type: types.IN_PROGRESSING
});

export const end_progressing = () => ({
	type: types.END_PROGRESSING
});

export const create_member = ({ id, email, password }) => ({
	type: types.CREATE_MEMBER,
	id,
	email,
	password
});

export const request_create_member = ({ email, password }) => ({
	type: types.REQUEST_CREATE_MEMBER,
	email,
	password
});

export const join_form_update = ({ email, password }) => ({
	type: types.JOIN_FORM_UPDATE,
	email,
	password
});

export const readall_member = (members) => ({
	type: types.READALL_MEMBER,
	members
});

export const request_readall_member = () => ({
	type: types.REQUEST_READALL_MEMBER
});