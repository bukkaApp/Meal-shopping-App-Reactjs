import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/profile.css';

export default class orderhistory extends Component{

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
							<th>DATE</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Brown Rice and Dodo with Chicken</td>
							<td>1</td>
							<td>800</td>
							<td>October 3rd 2017</td>
						</tr>
					</tbody>
				</table>
			</div>
			)
	}
}