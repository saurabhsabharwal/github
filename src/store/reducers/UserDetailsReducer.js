import produce from 'immer'
import {USER_DETAILS_FETCHING_START, USER_DETAILS_RECEIVED_DETAILS, USER_DETAILS_RECEIVED_REPOS} from '../actionTypes'

const baseState = {
	details: {},
	currentUser: '',
	fetchingDetails: false
};

const UserDetailsReducer = produce((draft, action) => {
	switch(action.type) {
		case USER_DETAILS_RECEIVED_DETAILS:
			draft.details = action.details;
			draft.currentUSer = action.username;
			draft.fetchingDetails = false;

			return draft;

		case USER_DETAILS_RECEIVED_REPOS:
			draft.details.repos = action.repos;

			return draft;

		case USER_DETAILS_FETCHING_START:
			draft.fetchingDetails = true;
			return draft;

		default:
			return draft;
	}
}, baseState);

export default UserDetailsReducer;
