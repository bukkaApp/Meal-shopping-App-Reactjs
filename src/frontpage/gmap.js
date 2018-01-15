
import React from "react"
import { compose, withProps, lifecycle } from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from 'react-google-maps'
import {connect} from 'react-redux'
 
const google=window.google
var aloc,bloc,cloc
const MapWithADirectionsRenderer=compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div  style={{ height: `70%`,position:'absolute',width:'100%', }} />,
    mapElement: <div style={{ height: `100%` }} />,
    center: cloc,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route({
        origin: new google.maps.LatLng(aloc.lat, aloc.lng),
        destination: new google.maps.LatLng(bloc.lat, bloc.lng),
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>
    <GoogleMap
    
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
)

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%`,position:'absolute',width:'100%', top:'0',bottom:'0',}} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={(props.bloc)?props.bloc:{ lat: 6.5562536, lng: 3.349428200000034 }}
  >
    {props.isMarkerShown && <Marker position={(props.bloc)?props.bloc:{ lat: 6.5562536, lng: 3.349428200000034 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        bloc={this.props.block}
        isMarkerShown={(this.props.bloc)?this.state.isMarkerShown:false}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

const Gmap=(props)=>{

 if (!props.one){
   aloc= props.aloc
   bloc= props.bloc
   if(props.aloc.lat<props.bloc.lat) {
    cloc=props.aloc
   }else{
    cloc=props.bloc
   }
 }else{
   aloc={}
   bloc={}
 }
  console.log("this is aloc",cloc)
  return(
    (props.one)?
    (props.bloc)?
     <MyFancyComponent bloc={props.bloc}/>:
     <MyFancyComponent/>:
     (<MapWithADirectionsRenderer />)
  )
}
function mapStateToProps(state){
	return state
}
export default connect(mapStateToProps)(Gmap)
