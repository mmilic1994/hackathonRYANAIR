import React from 'react';

const destinations = ['Valencia', 'Barcelona', 'Madrid', 'Milan', 'Athens'];
const origins = ['Prague', 'Berlin', 'Warsaw', 'Pardubice'];

export default class DropDown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selection: 0
        };
    }

    render() {
        return (
            <>
                <select className="origins">
                    { origins.forEach(origin => {
                        <option value={origin}>{origin}</option>
                    })
                    }   

                </select>
                <select className="destinations">
                    { destinations.forEach(destination => {
                        <option value={destination}>{destination}</option>
                    })
                    }  
                </select>
            </>
        )
    }
}