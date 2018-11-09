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

  componentDidMount() {
    this.setState({isLoading: true})
    fetch('https://api.skypicker.com/flights?flyFrom=PRG&to=LGW&dateFrom=16/11/2018&dateTo=19/11/2018&partner=picky&direct_flights=1')
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          flights: json.data,
          isLoading: false
        });
      });
      
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
       <DropDown />
       <div className="flight_list">
        <div className="flight">
        {console.log(this.state.flights)}
        { this.state.flights.map(
          flight => <FlightItem
          departureTime = {
            DateTime.fromMillis(flight.dTime * 1000).toFormat('dd.MM.yyyy hh:mm')}
          arrivalTime = {
            DateTime.fromMillis(flight.aTime * 1000).toFormat('dd.MM.yyyy hh:mm')}
          originCity = {flight.cityFrom}
          destinationCity = {flight.cityTo}
          flightPrice = {flight.price}
          
          />
        )}

        </div>
       </div>
      </>
    )
  }
}