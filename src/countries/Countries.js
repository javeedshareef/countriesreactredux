import React, { Component } from 'react';
import './Countries.css';
// import store from '../store';
import { callApi, showDetails } from '../action';
import { connect } from 'react-redux';

class Countries extends Component {

    componentDidMount() {
        this.props.loadData();
    }


    render() {
        const {
            countries,
            handleClick
        } = this.props;
        return (
            <div>
                {
                    countries.map((country) => {
                        const { name, flag, region } = country;
                        return (
                            <div key={name}>
                                <div className="country-item" onClick={() => {
                                    handleClick(country);
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

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        countries: state.countries
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick(country) {
            const action = showDetails(country);
            dispatch(action);
        },
        loadData() {
            const action = callApi();
            dispatch(action);
        },
        dispatch,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Countries)
