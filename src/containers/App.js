import React, { Component } from 'react';
import CardList from '../components/Cardlist';
import SWCardlist from '../components/SWCardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Toggle from '../components/Toggle';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			swChar: [],
			searchfield: '',
			api: 'robots'
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users => this.setState({ robots: users}));

		fetch('https://swapi.co/api/people')
			.then(response=> response.json())
			.then(users => this.setState({ swChar: users.results}));	
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	onAPIChange = (event) => {
		const api = this.state.api;
		if (api === 'robots') {
			this.setState({ api: 'starwars' });
		} else {
			this.setState({ api: 'robots' });
		}
		console.log(this.state.api);
	}

	render() {
		const { robots, swChar, searchfield, api } = this.state;
		const filteredRobots = robots.filter(robot =>{
			if (api === 'robots') {
				return robot.name.toLowerCase().includes(searchfield.toLowerCase());
			}})
		const filteredChars = swChar.filter(char =>{
			if (api === 'starwars') {	
				return char.name.toLowerCase().includes(searchfield.toLowerCase());
			}})
		return (
			<div className='tc'>
				<h1 className='f1'>Friend Finder</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Toggle searchSwitch={this.onAPIChange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots}/>
						<SWCardlist swChar={filteredChars}/>
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	}
}

export default App;