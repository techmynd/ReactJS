import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
	
	constructor(props) {
		super(props)
		this.FormSubmitTriggered = this.FormSubmitTriggered.bind(this)
	}

	FormSubmitTriggered(event){
		event.preventDefault()
		// alert(this.props)
		alert('Form Submit Triggered')
		// console.log(this.props)
	}

	render() {
		return (
			<div className="container">
				
				<h2>Contact</h2>
				<p>Contact page form here ... nothing fancy ...</p>
				<div className="clear20"></div>

					<div className="row">
						<div className="col-md-6">
							<div className="form-group">
								<label>Name</label>
								<input type="tetx" className="form-control" />
							</div>
						</div>

						<div className="col-md-6">
							<div className="form-group">
								<label>Email</label>
								<input type="email" className="form-control" />
							</div>
						</div>

						<div className="col-md-12">
							<div className="form-group">
							<label>Comments</label>
							<textarea className="form-control" rows="4"></textarea>	
							</div>
						</div>

						<div className="col-md-12">
							<div className="form-group">
								<label>File input</label>
								<input type="file" id="exampleInputFile" />
							</div>
						</div>

						<div className="col-md-12">
							<div className="checkbox">
								<label>
									<input type="checkbox" /> Check me out
								</label>
							</div>
						</div>

					</div>

				  <button type="submit" className="btn btn-default" onClick={this.FormSubmitTriggered}>Submit</button>

				<br /><br />
			</div>
		);
	};
};
export default Contact;