import  React, {Component } from 'react';
import logo from './logo.svg';
import './PageBackground.css';
import fetch from 'node-fetch';
import PropTypes from 'prop-types';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


export default class PageBackground extends Component{

	constructor(props) {
		super(props);
		this.getLocation=this.getLocation.bind(this);
		this.state={
			position:[2,2]
		};
		}
	getLocation () {
		
		fetch('http://ip-api.com/json')
		 .then((res)=>res.json())
		 .then((objec)=>{this.setState({position:[objec.lat,objec.lon]});console.log(this.state.position)})
		 .catch((err)=>{console.log("didn't connect to App",err);this.setState({position:[6.5243793,3.3792057]});})
	}
	componentDidMount() {
		this.getLocation();
	}
	componentWillUnmount() {
		this.getLocation();
	}
							   
	render(){
		return (
			<div className="map-holder">
      <Map center={this.state.position} zoom={15} >
        <TileLayer
          attribution=''
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
        	<Marker position={this.state.position}>
    		</Marker>
        </Map>
        </div>
        );
		}
	}