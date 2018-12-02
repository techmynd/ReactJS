import React, { Component } from 'react';
import './Apis.css';
import 'whatwg-fetch';
// import { handleResponse } from '../helperHandleResponse';
// import { API_URL } from './apiURLCrypto';

class Apis extends Component {

	constructor() {
		super();
		this.state = {
			loading: false,
			currencies: [],
			error: null,
		};
	}

	componentDidMount(){
		this.setState({ loading:true });
		
		// use import apiurl of use full statement below
		// below line is using es6 template literal
		// fetch('${API_URL}/cryptocurrencies?page=1&perPage=20')
		// or 
		// fetch(API_URL + '/cryptocurrencies?page=1&perPage=20')

		fetch('https://api.udilia.com/coins/v1/cryptocurrencies?page=1&perPage=20')
		
		// use .then(handleResponse) partial from helper import of just use full statement below
		// .then(handleResponse)

		.then(response => {
			return response.json().then(json => {
				return response.ok ? json : Promise.reject(json);
			});
		})

		.then((data) => {
			this.setState({
				currencies : data.currencies,
				loading: false,
			});
		})
		.catch((error) => {
			this.setState({
				error: error.errorMessage,
				loading: false,
			});
		});
	}

	// custom method
	renderChangePercent(percent){
		if(percent > 0) {
			return <span className="percent-positive">{percent}% &uarr;</span>
		} else if (percent < 0)	{
			return <span className="percent-negative">{percent}% &darr;</span>
		} else {
			return <span>{percent}</span>
		}
	}

	render() {

		//console.log(this.state);

		// if loading
		if(this.state.loading) {
			return <div className="text-center">Loading...</div>
		}

		// if error
		if(this.state.error) {
			return <div className="text-center error-message">{this.state.error}</div>
		}

		// You can also do it like below
		// const { loading, error, currencies } = this.state;
		// if(loading) {
		// 	return <div className="text-center">Loading...</div>
		// }
		// if(error) {
		// 	return <div className="text-center error-message">{this.state.error}</div>
		// }

		return (
			<div className="container">
                <h2>Crypto Currencies APi</h2>
				<p>This page is using currencies API from <a href="https://api.udilia.com/coins/v1/cryptocurrencies?page=1&perPage=20" target="_blank" rel="noopener noreferrer">udilia</a> and Fetch (whatwg-fetch) to retrieve 20 crypto currencies information.</p>

				{/* <div>
					{this.state.currencies.map((currency) => (
						
						// <div>{currency.id}</div>
						// Each child in an array or iterator should have a unique "key" prop
						
						<div key={currency.id}>{currency.id}</div>

					))}
				</div> */}

				<div className="table-responsive">
					<table className="table">
						<thead>
							<tr>
								<th>Rank</th>
								<th>Cryptocurrency</th>
								<th>Price</th>
								<th>Market Cap</th>
								<th>24H Change</th>
							</tr>
						</thead>
						<tbody>
							{/* loop starts */}
							{this.state.currencies.map((currency) => (
								<tr key={currency.id}>
									<td>{currency.rank}</td>
									<td>{currency.name}</td>
									<td>$ {currency.price}</td>
									<td>{currency.marketCap}</td>
									{/* <td>{currency.percentChange24h}</td> */}
									<td>{this.renderChangePercent(currency.percentChange24h)}</td>
								</tr>
							))}
							{/* loop ends */}
						</tbody>
					</table>
				</div>

	        </div>  
		);
	};
};

export default Apis;