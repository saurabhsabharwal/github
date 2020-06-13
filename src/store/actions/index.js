import {
	USERS_FETCHING_START,
	USERS_RECEIVE_USERS,
	USER_DETAILS_FETCHING_START,
	USER_DETAILS_RECEIVED_DETAILS,
	USER_DETAILS_RECEIVED_REPOS, USERS_CLEAR_LIST
} from '../actionTypes'

const startFetchingUsers = keyword => ({
	type: USERS_FETCHING_START,
	keyword
});

const startFetchingUSerDetails = username => ({
	type: USER_DETAILS_FETCHING_START,
	username
});

const receiveUsers = (keyword, users) => ({
	type: USERS_RECEIVE_USERS,
	keyword,
	users
});

export const clearUsersList = () => ({
	type: USERS_CLEAR_LIST
});

const receiveUserDetails = (username, details) => ({
	type: USER_DETAILS_RECEIVED_DETAILS,
	username,
	details
});

const receiveUserRepos = repos => ({
	type: USER_DETAILS_RECEIVED_REPOS,
	repos
});

export const fetchUsers = keyword => dispatch => {
	dispatch(startFetchingUsers(keyword));

	fetch(`https://api.github.com/search/users?q=${keyword}`)
		.then(response => response.json())
		.then(response => dispatch(receiveUsers(keyword, response.items)))
};

export const fetchUserDetails = username => dispatch => {
	dispatch(startFetchingUSerDetails(username))

	fetch(`https://api.github.com/users/${username}`)
		.then(response => response.json())
		.then(response => {
			dispatch(receiveUserDetails(username, response));
			dispatch(fetchUserRepos(response.repos_url))
		})
};

export const fetchUserRepos = url => dispatch => {
	fetch(url)
		.then(response => response.json())
		.then(response => dispatch(receiveUserRepos(response)))
};
