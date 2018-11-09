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
                    { origins.map((origin, i)  => 
                        <option key={i}>{origin}</option>
                    )
                    }   

                </select>
                <select className="destinations">
                    { destinations.map((destination, i) =>
                        <option key={i}>{destination}</option>
                    )
                    }  
                </select>
            </>
        )
    }
}