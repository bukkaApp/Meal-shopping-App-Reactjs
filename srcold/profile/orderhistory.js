import React, { Component } from 'react';
import '../style/profile.css';

export default class orderhistory extends Component{
	constructor(props) {
		super(props);
		this.props.orderhistory();
	}

	render(){
		return(
			<div className="m-history-holder">
				<h5>Your Order History</h5>
				<div className="m-header-info">
				<button>PAY FOR ALL UNPAID MEALS</button>
				<input placeholder="search order history" type="search"/>
				</div>
				<table className="m-table-style">
					<thead>
						<tr>
							<th>S/N</th>
							<th>FOOD ITEMS</th>
							<th>QTY</th>
							<th>PRICE</th>
							<th>PAYMENT STATUS</th>
							<th>DATE</th>
						</tr>
					</thead>
					<tbody>
					{(this.props.userstore.fetched_orderhistory)? this.props.userstore.orderhistory.map((meal,key)=>{return(
						<tr key={key}>
							<td>{key+1}</td>
							<td>{meal.itemName}</td>
							<td>{meal.itemQuantity}</td>
							<td>{meal.amount}</td>
							<td>{meal.paymentStatus}</td>
							<td>{meal.date}</td>
						</tr>)
					}): null}
					</tbody>
				</table>
			</div>
			)
	}
}