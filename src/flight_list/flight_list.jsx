import React from 'react';
import FlightItem from '../flight_item/flight_item.jsx';
import DropDown from '../drop-down/drop-down.jsx';
import { DateTime } from 'luxon';

export default class FlightList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flights: [],
      isLoading: false,
      flightsNumber: 5,
      searched: "big"
    }

  }


  selectedRoute = (data) => {
    if (data) {
      this.setState({ isLoading: true })
      fetch(`https://api.skypicker.com/flights?flyFrom=${data.origin}&to=${data.destination}&dateFrom=16/11/2018&dateTo=19/11/2018&partner=picky&direct_flights=${data.direct}`)
        .then(resp => resp.json())
        .then(json => {
          this.setState({
            flights: json.data,
            isLoading: false,
            searched: "small"
          });
        });
    }

  }

  showMore = ()  => {
    this.setState({flightsNumber: this.state.flightsNumber + 5});
  }
  
  render() {
    if (this.state.isLoading == true) {
      return (
        <>
          <header className={this.state.searched}>
            <div className="title">
              <h1>SkyScammer</h1>
            </div>
            <DropDown />
          </header>

          <div className="flight_list">
            <div className="flight-item">
              <div className="flight-prop col-name">Departure time</div>
              <div className="flight-prop col-name">Arrival time</div>
              <div className="flight-prop col-name">Origin city</div>
              <div className="flight-prop col-name">Destination city</div>
              <div className="flight-prop col-name">Price</div>
              <div className="flight-prop col-name">Stopovers</div>

            </div>
            <div className="spinner-container">
              <img className="loading-spinner" src="https://www.flightcomp.de/wp-content/plugins/gravityforms/images/spinner.gif" />
              Hold tight, fetching flights...
            </div>
          </div>
        </>
      );
    }
    return (
      <>
        <header className={this.state.searched}>
          <div className="title">
            <h1>SkyScammer</h1>
          </div>
          <DropDown action={this.selectedRoute} />
        </header>

        <div className="flight_list">
          <div className="flight-item">
            <div className="flight-prop col-name">Departure time</div>
            <div className="flight-prop col-name">Arrival time</div>
            <div className="flight-prop col-name">Origin city</div>
            <div className="flight-prop col-name">Destination city</div>
            <div className="flight-prop col-name">Price</div>
            <div className="flight-prop col-name">Stopovers</div>

          </div>
          {this.state.flights.map(
            flight => <FlightItem
              departureTime={
                DateTime.fromMillis(flight.dTime * 1000).toFormat('dd.MM.yyyy hh:mm')}
              arrivalTime={
                DateTime.fromMillis(flight.aTime * 1000).toFormat('dd.MM.yyyy hh:mm')}
              originCity={flight.cityFrom}
              destinationCity={flight.cityTo}
              flightPrice={flight.price * 1000}
              stopOvers={flight.route.length - 1}
            />
          )}

        </div>
      </>
    )
  }
}