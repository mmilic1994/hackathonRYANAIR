import React from 'react';
import FlightItem from '../flight_item/flight_item.jsx';

export default class FlightList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flights: []
    }

  }

  componentDidMount() {
    fetch('https://api.skypicker.com/flights?flyFrom=PRG&to=LGW&dateFrom=16/11/2018&dateTo=19/11/2018&partner=picky&direct_flights=1')
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          flights: json.data[0]
        });
      });
      
  }
  
  render() {
    
    return (
      <>
       <div className="flight_list">
       <div className="flight">
       {console.log(this.state.flights)}
       { this.state.flights.map(
         flight => <FlightItem
         departureTime = {flight.dTime}
         arrivalTime = {flight.aTime}
        // originCity = {flight.cityFrom}
        // destinationCity = {flight.cityTo}
        // flightPrice = {flight.price}
        />
       )}

       </div>
       </div>
      </>
    )
  }
}