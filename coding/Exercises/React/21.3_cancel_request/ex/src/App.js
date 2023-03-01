import './App.css';
import { Component } from 'react';
import axios from 'axios';


class FetchingData extends Component {

  state = {
    countries: [],
  };


  controller = new AbortController();
  componentDidMount() {

    axios.get(`https://restcountries.com/v3.1/all`, {
      signal: this.state.controller.signal
    })
      .then((res) => {
        const countries = res.data;
        this.setState({ countries: countries });
      })
  }

  componentWillUnmount() {
    this.state.controller.abort()
  }


  render() {
    return (
      <div>
        {this.state.countries.map((country, index) => {
          return (
            <p key={index}>{country.name.common} </p>
          )
        })}

      </div>
    )
  }
}

class App extends Component {
  state = {
    show: false,
  }

  render() {
    return (
      <div className='App-container'>
        <button className='btn' onClick={() => { this.setState({ show: !this.state.show }) }}> fetch & Show Data </button>
        {this.state.show && <FetchingData />}
      </div>
    )
  }

}

export default App;
