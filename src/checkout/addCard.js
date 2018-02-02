import React from 'react'
import '../style/signIn.css'
import Faspinner from 'react-icons/lib/fa/spinner'
import lib from '../util/lib'
import ajx from '../util/ajax'
 
const addcard =(props)=>{
	return(
		<div className="signInPopup">
			<div className="AddcardPopupHolder">
				<div id="topPart">
					<p>Add Card</p>
					<a onClick={()=>lib.toggleShowcard()}>X</a>
				</div>
				<form className="formField" autoComplete="off">
					<div id="headingHolder">
						<div id="imageHolder">
							<img src={ajx.visa} alt="visa" />
							<img src={ajx.master} alt="master"/>
							<img src={ajx.verve} alt="verve"/>
							<img  alt=""/>
						</div>
					</div>
					<div id="cardNumberHolder">
						<h4>Card number</h4>
						<input 	id="cardNumber" 
								placeholder="1234-5678-9999-9999"
								autoComplete="off"/>
					</div>
					<div id="extrainfoHolder">
						<div id="info">
							<h4>Expiration</h4>
							<h4>CVV</h4>
						</div>
						<div className="otherinfoHolder">
							<div className="YearDate">
								<input  id="MonthNumber" 
										type="number" 
										min="1" 
										max="12" 
										placeholder="MM" />
								<input  id="YearNumber" 
										type="number" 
										min="2017" 
										max="2099" 
										step="1" 
										placeholder="YYYY" />
							</div>
							<div className="cvvinfo">
								<input  id="CVVNumber" 
										min="100" 
										max="999" 
										placeholder="128"/>
							</div>
						</div>
					</div>
					{(!props.user.fetching_addcard)?
						<button className="btn-red" 
								onClick={()=>lib.newcard()}>
							Add Card
						</button>:
						null
					}
					{(props.user.fetching_addcard)?
						<button className="btn-red load">
							Just a Second!
							<span className="loader">
								<Faspinner/>
							</span>
						</button>:
						null
					}
				</form>
			</div>
		</div>
		)
}

export default addcard