import produce from 'immer'

import {USERS_CLEAR_LIST, USERS_FETCHING_START, USERS_RECEIVE_USERS} from '../actionTypes'

const baseState = {
	keyword: '',
	users: [],
	fetchingUsers: false
};

const UsersReducer = produce((draft, action) => {
	switch (action.type) {
		case USERS_RECEIVE_USERS:
			draft.users = action.users;
			draft.keyword = action.keyword;
			draft.fetchingUsers = false;

			return draft;

		case USERS_FETCHING_START:
			draft.fetchingUsers = true;
			return draft;

		case USERS_CLEAR_LIST:
			draft.users = [];
			return draft;

		default:
			return draft;
	}
}, baseState);

export default UsersReducer;
