import  React, {Component } from 'react';
import '../style/PageBackground.css';
import fetch from 'node-fetch';
import { Map, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


export default class PageBackground extends Component{

	constructor(props) {
		super(props);
		this.state={
			position:[2,2]
		};
		}
	 /*async getLocation () {
	 	try{
	 			var response= await fetch('http://ip-api.com/json');
	 			var json=await response.json();
	 			this.setState({position:[json.lat,json.lon]});
	 			console.log(this.state.position);
	 		}
	 		catch(e){
	 			this.setState({position:[6.4531,3.3958]})
	 			console.log("we are using a default Location,")
	 		}
	}*/
	componentDidMount() {
		/*if(!this.props.loc){
		(async()=>{
			try{
		        var response= await fetch('http://ip-api.com/json');
		        var json=await response.json();
		        this.setState({position:[json.lat,json.lon]});
		        }
		    catch(e){
		            this.setState({position:[6.4531,3.3958]})
		            console.log("we are using a default Location due to",e)
					}})()
		}else{*/
			this.setState({position:this.props.loc});
		/*}*/
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.loc!==this.state.position){
			this.setState({position:nextProps.loc});
		}
	}
							   
	render(){
		return (
			<div className="map-holder">
      <Map center={this.state.position} zoom={15} >
        <TileLayer
          attribution=''
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
        </Map>
        </div>
        );
		}
	}