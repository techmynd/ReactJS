import React, { Component } from 'react';
import './Products.css';
import 'whatwg-fetch';

//import 'file-loader';
//import 'url-loader';

// import categories json file
import categoriesData from './cats.json';

// import products json file
import productsData from './products.json';

// const jsonFileData = categoriesData;
// console.log(jsonFileData);

class Products extends Component {

	constructor(props) {
		super(props)
	}	

	render() {

		return (
			<div className="container">
                <div className="row">
					
				<div className="col-md-12">
					<p className="text-center">Followng categories and products list is being called from loacl json files (cats.json and products.json).</p>
				</div>

					<div className="col-md-4">
						
						<h5>Categories</h5>
						<div className="clear20"></div>

						<ul className="list-unstyled">

							{categoriesData.map((catData, index) => {
								return <li key={catData.cid}>{catData.catname}</li>
							})}

						</ul>
					</div>
					<div className="col-md-8">
						
						<h5>Products</h5>
						<div className="clear20"></div>
						
						<div className="row">

							{productsData.map((prodData, index) => {
								return <div key={prodData.pid} className="col-lg-4 product-box">
									<div className="product-image"><img src={require('./images/'+prodData.pimg)} /></div>
									<div className="product-name">{prodData.pname}</div>
									<div className="product-price">$ {prodData.pprice}</div>
									<div className="btn btn-primary btn-sm">DETAILS</div>
								</div>
							})}

						</div>
					</div>
				</div>
	        </div>  
		);
	};
};

export default Products;