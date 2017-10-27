import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import FaMapMarker from 'react-icons/lib/fa/map-marker';
import './App.css';
import PropTypes from 'prop-types'

class SimpleForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: this.props.address }
    this.onChange = (address) => this.setState({ address })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    this.props.addressForParent(this.state.address);
    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {console.log('Success', latLng);this.getChefs(latLng.lat,latLng.lng)})
      .catch(error => console.error('Error', error))

  }

  handleEnter = (address) => {
  	this.props.addressForParent(address);
  geocodeByAddress(address)
    .then(results => getLatLng(results[0]))
      .then(latLng => {console.log('Success', latLng);})
      .catch(error => console.error('Error', error))
}

 handleSelect = (address, placeId) => {
 	this.setState({ address, placeId });
 	this.props.addressForParent(address);
  geocodeByAddress(address)
    .then(results => getLatLng(results[0]))
      .then(latLng => {console.log('Success', latLng); this.getChefs(latLng.lat,latLng.lng);latLng})
      .catch(error => console.error('Error', error))

  // You can do other things with address string or placeId. For example, geocode :)
}
 async getChefs (lat,lon){
 	try{
 		const url=`http://salty-escarpment-2400.herokuapp.com/api/v1/bukka/chefs/` + lat+`/`+lon;
 		var response=await fetch(url);
 		var json = await response.json();
 		this.props.searchResultForParent(json);}
 	catch(e){
 			console.log("No Chefs found for your location");
 		}
}
   render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
      placeholder: 'Please enter a delivery address',
    }
 

    const AutocompleteItem = ({ formattedSuggestion }) => (
    <div><FaMapMarker style={{marginRight:'5px'}}/>
      <strong>{ formattedSuggestion.mainText }</strong>{' '}
      <small>{ formattedSuggestion.secondaryText }</small>
    </div>
  )
    const cssClasses = {
    input: 'form-control',
    autocompleteContainer:'holder',
    googleLogoImage:'Glogo'
  }

    return (
      <form onSubmit={this.handleFormSubmit} style={{display:'flex',justifyContent:'spaceBetween',}}>
        <PlacesAutocomplete inputProps={inputProps} autocompleteItem={AutocompleteItem} classNames={cssClasses} onEnterKeyDown={this.handleEnter} onSelect={this.handleSelect} />
        <button type="submit" className=" btn-red search-Btn">Submit</button>
      </form>
    )
  }
}

export default SimpleForm;