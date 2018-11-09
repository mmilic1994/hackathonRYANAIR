import React from 'react';
import FlightItem from '../flight_item/flight_item.jsx';
import DropDown from '../drop-down/drop-down.jsx';
import {DateTime} from 'luxon';

export default class FlightList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flights: [],
      isLoading: false
    }

  }
  

  selectedRoute = (data) => {
    if(data) 
    {
      this.setState({isLoading: true})
      fetch(`https://api.skypicker.com/flights?flyFrom=${data.origin}&to=${data.destination}&dateFrom=16/11/2018&dateTo=19/11/2018&partner=picky&direct_flights=0`)
        .then(resp => resp.json())
        .then(json => {
          this.setState({
            flights: json.data,
            isLoading: false
          });
        });
      }
      
  }
  
  render() {
    if (this.state.isLoading == true) {
      return (
        <div className="spinner-container">
          <img className="loading-spinner" src="https://www.flightcomp.de/wp-content/plugins/gravityforms/images/spinner.gif" />
        </div>
      );
    }
    return (
      <>
       <DropDown action={this.selectedRoute} />
       <div className="flight_list">
       <div className="flight-item">
        <div className="flight-prop col-name">Departure time</div>
        <div className="flight-prop col-name">Arrival time</div>
        <div className="flight-prop col-name">Origin city</div>
        <div className="flight-prop col-name">Destination city</div>
        <div className="flight-prop col-name">Price</div>
        <div className="flight-prop col-name">Stopovers</div>

      </div>
        { this.state.flights.map(
          flight => <FlightItem
          departureTime = {
            DateTime.fromMillis(flight.dTime * 1000).toFormat('dd.MM.yyyy hh:mm')}
          arrivalTime = {
            DateTime.fromMillis(flight.aTime * 1000).toFormat('dd.MM.yyyy hh:mm')}
          originCity = {flight.cityFrom}
          destinationCity = {flight.cityTo}
          flightPrice = {flight.price}
          stopOvers = {flight.route.length -1}
          />
        )}

       </div>
      </>
    )
  }
}