import React from 'react'
import {connect} from 'react-redux'
import ListUser from '../ListUser'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch, faSpinner} from '@fortawesome/free-solid-svg-icons'
import {Helmet} from 'react-helmet'

import {fetchUsers, clearUsersList} from '../../store/actions'

import './index.css'

class Home extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			keyword: ''
		};

		this.searchBox = React.createRef();
	}

	handleKeywordChange = e => {
		this.setState({
			keyword: e.target.value
		});
	};

	componentDidMount() {
		const doneTypingInterval = 500;
		let typingTimer;

		this.searchBox.current.addEventListener('keyup', () => {
			clearTimeout(typingTimer);

			typingTimer = setTimeout(() => {
				if (this.state.keyword !== '') this.props.fetchUsers(this.state.keyword);
				else this.props.clearUsers();
			}, doneTypingInterval)
		});

		this.searchBox.current.addEventListener('keydown', () => {
			clearTimeout(typingTimer);
		});
	}

	render() {
		return (
			<>
				<Helmet>
					<title>
						{
							this.state.keyword === '' ? 'Users search | Github' : `${this.state.keyword} search results | Github`
						}
					</title>
				</Helmet>
				<div className={'search-container'}>
					<div className={'search-box'}>
						<span className={'search-icon'}>
							{
								this.props.fetchingUsers ? <FontAwesomeIcon icon={faSpinner} spin /> : <FontAwesomeIcon icon={faSearch} />
							}
						</span>
						<input ref={this.searchBox} type={'text'} value={this.state.keyword} onChange={e => this.handleKeywordChange(e)} placeholder={'Find a member...'} />
					</div>
					<div className={'search-results'}>
						{
							this.props.users && this.props.users.length ? this.props.users.map((user, i) => <ListUser user={user} key={i}/>) : 'Start Searching...'
						}
					</div>
				</div>
			</>
		)
	}
}

const mapStateToProps = (state) => ({
	users: state.UsersReducer.users,
	fetchingUsers: state.UsersReducer.fetchingUsers
});

const mapDispatchToProps = dispatch => ({
	fetchUsers: keyword => dispatch(fetchUsers(keyword)),
	clearUsers: () => dispatch(clearUsersList())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)
