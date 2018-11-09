import React from 'react';

const destinations = ['Valencia', 'Barcelona', 'Madrid', 'Milan', 'Athens'];
const origins = ['Prague', 'Berlin', 'Warsaw', 'Pardubice'];

export default class DropDown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            origin: "",
            destination: ""
        };
    }

    selectedOrigin = (e) => {
        this.setState({
            origin: e.target.value
        })
    }

    selectedDestination = (e) => {
        this.setState({
            destination: e.target.value
        })
    }

    render() {
        return (
            <>
                <p>Departure City</p>
                <select value={this.state.origin} onChange={this.selectedOrigin} className="origins">
                    { origins.map((origin, i)  => 
                        <option value={origin} key={i}>{origin}</option>
                    )
                    }   

                </select>
                <p>Destination City</p>
                <select value={this.state.destination} onChange={this.selectedDestination} className="destinations">
                    { destinations.map((destination, i) =>
                        <option key={i}>{destination}</option>
                    )
                    }  
                </select>
            </>
        )
    }
}