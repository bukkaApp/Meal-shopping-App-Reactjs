import constants from './constants';

var input_Address=(obj)=>{
	return{
		type:'input_Address',
		payload:obj
	}
}

var locate_Chef=(chef)=>{
	return{
		type:'Locate_Chef',
		payload:chef
	}
}

var Chef_Located=(res)=>{
	return{
		type:"Chef_Located",
		payload:res
	}
}

var add_Cart=(name=document.getElementById('nameOfFoodItem').innerHTML, price=parseFloat(document.getElementById('priceId').innerHTML.substring(1)),
		quantity=parseInt(document.getElementById('numberOfItems').innerHTML,10))=>{
	var totalCost=price*quantity,newCart={};
	newCart[name]={
		price,quantity,totalCost
	}
	return{
		type:'Add_Cart',
		payload:newCart
	}
}