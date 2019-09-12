import React, { Component } from 'react';
import TopSpot from './topspot';
const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
       <div className='App container'>
        <div className="jumbotron text-center">
          <h1>San Diego Top Spots</h1>
          <p className="font-weight-light">A list of the top 30 places to see in San Diego, California.</p>
        </div>
        { 
          this.state.topspots.map(topspot => (
          <TopSpot
              key={topspot.id}
              name={topspot.name}
              description={topspot.description}
              location={topspot.location} />
          ))
        }   
      </div>
    );
  }
}

export default App;
