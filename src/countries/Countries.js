import React, { Component } from 'react';
import { getCountries } from '../services/countries';
import './Countries.css';

export default class Countries extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: []
        };
    }

    async componentDidMount() {
        try {
            const res = await getCountries();
            this.setState({ countries: res.data });
        } catch (error) {
            console.warn('Failed To Fetch');
        }
    }

    handleClick = (country) => {
        const countries = this.state.countries.map(c => c === country ? { ...c, isExpanded: true } : c);
        this.setState({ countries });
    };

    render() {
        const {
            countries
        } = this.state;
        return (
            <div>
                {
                    countries.map((country) => {
                        const { name, flag, region } = country;
                        return (
                            <div key={name}>
                                <div className="country-item" onClick={() => {
                                    this.handleClick(country);
                                }}>
                                    <img src={flag} alt=""></img>
                                    <div style={{ padding: '5px 10px' }}>
                                        <p className="country-name"><strong>{name}</strong></p>
                                        <p className="country-region"><small>{region}</small></p>
                                    </div>
                                </div>
                                {
                                    country.isExpanded && (
                                        <section>
                                            Expanded
                                        </section>
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

