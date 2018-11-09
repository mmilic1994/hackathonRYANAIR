import React from 'react';


export default class FlightItem extends React.Component {


  render() {
    return (
      <div>
        <p>{this.props.departureTime}</p>
        <p>{this.props.arrivalTime}</p>
        <p>{this.props.originCity}</p>
        <p>{this.props.destinationCity}</p>
        <p>{this.props.flightPrice}</p>
      </div>
    );
  }
}

