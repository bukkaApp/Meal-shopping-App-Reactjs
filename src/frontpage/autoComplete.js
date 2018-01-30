import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import FaMapMarker from 'react-icons/lib/fa/map-marker'
import '../style/App.css'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Faspinner from 'react-icons/lib/fa/spinner'
import lib from '../util/lib'
import {mapStateToProps} from '../util/ajax'

class SimpleForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: this.props.address.Location }
    this.onChange = (address) => this.setState({ address })
   
  }

  restaurantHandleFormSubmit = (event) => {
    event.preventDefault()
    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {lib.address(this.state.address,latLng)})
      .catch(error => console.error('Error', error))

  }

  restaurantHandleEnter = (address) => {
  this.setState({ address })
  geocodeByAddress(address)
    .then(results => getLatLng(results[0]))
    .then(latLng => { lib.address(address,latLng);})
    .catch(error => console.error('Error', error))
}
  

restaurantHandleSelect = (address, placeId) => {
 	this.setState({ address, placeId })
  geocodeByAddress(address)
    .then(results => getLatLng(results[0]))
    .then(latLng => {lib.address(address,latLng)})
    .catch(error => console.error('Error', error))
}


  handleFormSubmit = (event) => {
    event.preventDefault()
    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {lib.address(this.state.address,latLng);lib.chefResult(latLng)})
      .catch(error => console.error('Error', error))

  }

  handleEnter = (address) => {
  this.setState({ address })
  geocodeByAddress(address)
    .then(results => getLatLng(results[0]))
    .then(latLng => { lib.address(address,latLng);lib.chefResult(latLng);})
    .catch(error => console.error('Error', error))
}
  

 handleSelect = (address, placeId) => {
 	this.setState({ address, placeId })
  geocodeByAddress(address)
    .then(results => getLatLng(results[0]))
    .then(latLng => {lib.address(address,latLng);lib.chefResult(latLng)})
    .catch(error => console.error('Error', error))
}
  componentDidMount(){
    /**let cui=document.getElementById('cci')
    lib.addcuisine(cui)*/
  }
   render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
      placeholder: 'Please enter a delivery address',
    }
 

    const AutocompleteItem = ({ formattedSuggestion }) => (
    <div><FaMapMarker style={{marginRight:'10px'}}/>
      <strong>{ formattedSuggestion.mainText }</strong>{' '}
      <small>{ formattedSuggestion.secondaryText }</small>
    </div>
  )
    const cssClasses = {
    input: 'form-controli',
    autocompleteContainer:'holder',
    googleLogoImage:'Glogo'
  }

    return (
      
      <form onSubmit={this.handleFormSubmit} 
            className={(this.props.page.isRestaurant)? "isop abc":"abc"}>
        { (this.props.page.isRestaurant)?
          null:
          (this.props.chef.currentCuisine)?
          <div className="hn">
          <h5 id="cci">&#9662;{this.props.chef.currentCuisine}</h5>
          {
            (Object.keys(this.props.chef.chefAndCuisine).length>1)?
              <ul className="abi">
                {Object.keys(this.props.chef.chefAndCuisine).map(
                  (cui,key)=>
                  <li className="lee" key={key}
                      onClick={()=>lib.updatechefbycuisine(cui)}>
                      {cui}
                  </li>
                  )}
              </ul>:
              null
          }
          </div>:
          null
        }
        { (this.props.page.isRestaurant)?
          (window.innerWidth<768)?
          <Link className="bbdaa" to="/Search">    
            <div className={(this.props.mobileroute)? this.props.mobileroute+" bbd":" bbd"} onClick={()=>console.log(window.innerWidth)}>
                <span className={(this.props.chef.fetching_chefAndCuisine)? "ll bb":"bb"}>
                  {(!this.props.address.Located)?
                    <FaMapMarker/>:
                    <FaMapMarker/>
                  }
                </span>
                <PlacesAutocomplete inputProps={inputProps} 
                                    autocompleteItem={AutocompleteItem} 
                                    classNames={cssClasses} 
                                    onEnterKeyDown={this.restaurantHandleEnter} 
                                    onSelect={this.restaurantHandleSelect}  />
              </div>
            </Link>:
            <div className="bbd">
            <span className={(this.props.chef.fetching_chefAndCuisine)? "ll bb":"bb"}>
              {(!this.props.address.Located)?
                <FaMapMarker/>:
                <FaMapMarker/>
              }
            </span>
            <PlacesAutocomplete inputProps={inputProps} 
                                autocompleteItem={AutocompleteItem} 
                                classNames={cssClasses} 
                                onEnterKeyDown={this.restaurantHandleEnter} 
                                onSelect={this.restaurantHandleSelect}  />
            </div>:
            (window.innerWidth<768)?
            <Link className="bbdaa" to="/Search">    
              <div className={(this.props.mobileroute)? this.props.mobileroute+" bbd":" bbd"} onClick={()=>console.log(window.innerWidth)}>
                  <span className={(this.props.chef.fetching_chefAndCuisine)? "ll bb":"bb"}>
                    {(!this.props.address.Located)?
                      <FaMapMarker/>:
                      <FaMapMarker/>
                    }
                  </span>
                  <PlacesAutocomplete inputProps={inputProps} 
                                      autocompleteItem={AutocompleteItem} 
                                      classNames={cssClasses} 
                                      onEnterKeyDown={this.handleEnter} 
                                      onSelect={this.handleSelect}  />
                </div>
              </Link>:
            <div className="bbd">
            <span className={(this.props.chef.fetching_chefAndCuisine)? "ll bb":"bb"}>
              {(!this.props.address.Located)?
                <FaMapMarker/>:
                <FaMapMarker/>
              }
            </span>
            <PlacesAutocomplete inputProps={inputProps} 
                                autocompleteItem={AutocompleteItem} 
                                classNames={cssClasses} 
                                onEnterKeyDown={this.handleEnter} 
                                onSelect={this.handleSelect}  />
            </div>
        }
        { (this.props.page.isRestaurant)?
          null:
          (!this.props.chef.fetching_chefAndCuisine && !this.props.chef.first_search_completed)? 
          (this.props.chef.currentCuisine===null)?
          <button type="submit" 
                  className="xp btn-red max-summit min-submit ">
            Submit
          </button>:
          null:
          null
        }
        { (this.props.page.isRestaurant)?
          null:
          (this.props.chef.fetching_chefAndCuisine && !this.props.chef.first_search_completed)?
          (this.props.chef.currentCuisine===null)?
          <button type="submit" 
                  className="xp btn-red load ">
            <span className="loader ">
              <Faspinner/>
            </span>
          </button>:
          null:
          null
        }
        
      </form>
      
    )
  }
}

export default connect(mapStateToProps)(SimpleForm)