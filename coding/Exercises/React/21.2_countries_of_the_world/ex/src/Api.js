import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        countryName: []
    }

    componentDidMount() {
        axios.get(`https://restcountries.com/v3.1/all`)
            .then(res => {
                const countryName = res.data;
                this.setState({ countryName });
            })
    }

    render() {
        return (
            <ul>
                {
                    this.state.countryName
                        .map(countryName =>
                            <li key={countryName.id}>{countryName.name}</li>
                        )
                }
            </ul>
        )
    }
}

