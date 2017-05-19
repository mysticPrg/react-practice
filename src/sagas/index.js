import { 
	REQUEST_CREATE_MEMBER,
	REQUEST_READALL_MEMBER
} from '../actions/ActionTypes';

import * as actionCreator from '../actions';
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { member } from '../utils/mockServer';

function* requestCreateMember(action) {
	yield put(actionCreator.in_progressing());
	
	const newMember = yield call(member.create, action.email, action.password);
	yield put(actionCreator.create_member(newMember));
	
	yield put(actionCreator.end_progressing());
}

function* requestReadAllMember() {
	yield put(actionCreator.in_progressing());
	
	const members = yield call(member.readAll);
	yield put(actionCreator.readall_member(members));

	yield put(actionCreator.end_progressing());
}

function* handleRequestCreateMember() {
	yield takeLatest(REQUEST_CREATE_MEMBER, requestCreateMember);
}

function* handleRequestReadAllMember() {
	yield takeEvery(REQUEST_READALL_MEMBER, requestReadAllMember);
}

export default function* rootSaga() {
	yield all([
		handleRequestCreateMember(),
		handleRequestReadAllMember()
	]);
};
