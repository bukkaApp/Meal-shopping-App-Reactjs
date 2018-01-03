import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import FaMapMarker from 'react-icons/lib/fa/map-marker';
import '../style/App.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { fetch_address, fetch_chef, identify_user, get_chef } from '../data_Container/action/actions';
import fetch   from 'isomorphic-fetch';
import axios from 'axios';
import Faspinner from 'react-icons/lib/fa/spinner';
import lib from '../util/lib'

class SimpleForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: this.props.address.Location }
    this.onChange = (address) => this.setState({ address })
   
  }


  handleFormSubmit = (event) => {
    event.preventDefault()
    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {this.props.dispatch(fetch_address({address:this.state.address,lng:latLng.lng,lat:latLng.lat}));lib.chefResult(latLng)})
      .catch(error => console.error('Error', error))

  }

  handleEnter = (address) => {
  geocodeByAddress(address)
    .then(results => getLatLng(results[0]))
    .then(latLng => {this.props.dispatch(fetch_address({address:this.state.address,lng:latLng.lng,lat:latLng.lat}));lib.chefResult(latLng)})
    .catch(error => console.error('Error', error))
}
  setaddress(){
 
  }
 handleSelect = (address, placeId) => {
 	this.setState({ address, placeId });
  geocodeByAddress(address)
    .then(results => getLatLng(results[0]))
      .then(latLng => {this.props.dispatch(fetch_address({address:this.state.address,lng:latLng.lng,lat:latLng.lat}));lib.chefResult(latLng)})
      .catch(error => console.error('Error', error))
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
      
      <form onSubmit={this.handleFormSubmit} style={{display:'flex',justifyContent:'spaceBetween',}} className="abc">
        <PlacesAutocomplete inputProps={inputProps} autocompleteItem={AutocompleteItem} classNames={cssClasses} onEnterKeyDown={this.handleEnter} onSelect={this.handleSelect} />
        {(!this.props.chef.fetching)? <button type="submit" className="btn-red max-summit min-submit">Submit</button>:null}
        {(this.props.chef.fetching)?<button type="submit" className="btn-red"><span className="loader"><Faspinner/></span></button>:null}
      </form>
      
    )
  }
}

const mapStateToProps=(state)=>{
  return state;
};
export default connect(mapStateToProps)(SimpleForm);