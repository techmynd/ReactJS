import React, { Component } from 'react';
import './Usrbind.css';

class Usrbind extends Component {
	render() {
		return (
			<div>
				<p>User Name is <strong>{this.props.username}</strong> Age is <strong>{this.props.userage}</strong></p>
                <form className="form-inline">
				  <div className="form-group">
				    <label>Change Name</label>
				    
				    {/* <input type="text" className="form-control" style={{margin: "0 10px 0 10px"}} onChange={props.changed} /> */}
				    <input type="text" className="form-control" style={{margin: "0 10px 0 10px"}} value={this.props.username} onChange={this.props.changed} /> 

				  </div>
				</form>  
			</div>
		);
	};
};

export default Usrbind;