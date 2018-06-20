import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
	render() {
		return (
			<div>
				<h2>Contact</h2>
				<form>
				  <div className="form-group">
				    <label>Email address</label>
				    <input type="email" className="form-control" placeholder="Email" />
				  </div>
				  <div className="form-group">
				    <label>Password</label>
				    <input type="password" className="form-control" placeholder="Password" />
				  </div>
				  <div className="form-group">
				    <label>File input</label>
				    <input type="file" id="exampleInputFile" />
				    <p className="help-block">Example block-level help text here.</p>
				  </div>
				  <div className="checkbox">
				    <label>
				      <input type="checkbox" /> Check me out
				    </label>
				  </div>
				  <button type="submit" className="btn btn-default">Submit</button>
				</form>
				<br /><br />
			</div>
		);
	};
};
export default Contact;