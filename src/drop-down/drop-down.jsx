import React from 'react';

const destinations = ['Valencia', 'Barcelona', 'Madrid', 'Milan', 'Athens'];
const origins = ['Prague', 'Berlin', 'Warsaw', 'Pardubice'];

export default class DropDown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            origin: "Prague",
            destination: "London"
        };
    }

    action = (e) => {
        console.log("origin:" + document.getElementById('origin').value)
        console.log("destination:" + document.getElementById('destination').value)
        console.log("checkbox:" + document.getElementById('direct_only').checked)

        
        this.props.action({
            origin: document.getElementById('origin').value,
            destination: document.getElementById('destination').value
            
        })
    }

    render() {
        return (
            <>
                <p>Departure City</p>
                <select id="origin" className="origins">
                    { origins.map((origin, i)  => 
                        <option value={origin} key={i}>{origin}</option>
                    )
                    }   

                </select>
                <p>Destination City</p>
                <select id="destination">
                    { destinations.map((destination, i) =>
                        <option key={i}>{destination}</option>
                    )
                    }  
                </select>
                <br />
                <button onClick={this.action}>Search connections!</button><br />
                <input type="checkbox" name="direct" id="direct_only"/>Direct only

            </>
        )
    }
}