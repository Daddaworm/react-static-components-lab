import React, { Component } from 'react';
import CatComponent from './CatComponent'
import {GraceHopperQuoteComponent} from './GraceHopperQuoteComponent'
import MouseComponent from './MouseComponent'

class App extends Component {
	render() {
		// your code in the return statement below!
		console.log('CatComponent', CatComponent)
		console.log('react', React)
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MouseComponent />
			</div>
		);
	}
}

export default App;
