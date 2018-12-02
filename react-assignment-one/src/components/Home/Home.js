import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
	
	constructor(props) {
		super(props);
		
		// text initial state // associated with toggle text button
		this.state = {
			shown: true,
			value : ''
		};

	};

	// associated with toggle text button
	toggleTextHome() {
		this.setState({
			shown: !this.state.shown
		});
		
	};

	// Fire ALert
	showAlert(){
		alert('Aha! Alert triggered successfully!');
	};

	justExecuteThisFunction(){
		return 'This is just text that is being returned by a function';
	};

	handleInputChange = (event) =>{
		this.setState({value: event.target.value});
	}
		
	render() {

		// associated with toggle text button
		var shown = {
			display: this.state.shown ? "block" : "none"
		};
		
		return (
	
			<div className="container homepage">

				<h2>Introduction</h2>
				<p>This is a react app Homepage. Following page is being loaded via Home component. Try small utilities below and then explore other pages.</p>
				
				<div className="clear20"></div>

				<div className="row home-wrap">

					<div className="col-lg-6"> 
						<div className="column-outer-line">
							<h5>Toggle Area Test</h5>
							<button className="btn btn-default" onClick={this.toggleTextHome.bind(this)}>Toggle Text Below</button>
							<div className="clear10"></div>
							<p style={ shown }>Cras justo odio, dapibus ac facilisis, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
						</div>
					</div>

					<div className="col-lg-6"> 
						<div className="column-outer-line">
							<h5>Call Alert via a Function on Click</h5>
							<button className="btn btn-default" onClick={this.showAlert}>Fire an Alert</button>
						</div>	
					</div>

					<div className="col-lg-6">
						<div className="column-outer-line">
							<h5>Function Execution</h5>
							{this.justExecuteThisFunction()}
						</div>
					</div>

					<div className="col-lg-6"> 
						<div className="column-outer-line">
							<h5>Input Binding</h5>
							{this.state.value}
							<input name="name" id="justAnInput" className="form-control" value={this.state.value} onChange={this.handleInputChange} />
						</div>
					</div>

					<div className="clear40"></div>

					<div className="col-lg-12">
						<h5>Some other text</h5>
						<p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
					</div>

				</div> 
			  </div> 
		);
	};
};

export default Home;

