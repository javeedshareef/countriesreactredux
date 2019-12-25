import React, { Component } from 'react';


export default class Countries extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: []
        };
    }
    render() {
        const {
            countries
        } = this.state;
        return (
            <div>
                {
                    countries.map(({ name, flag, region }) => {
                        return (
                            <div key={name}>
                                <img src={flag}></img>
                                <div>
                                    <p>{name}</p>
                                    <p>{region}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

