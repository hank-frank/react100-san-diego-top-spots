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
        // .. the .get function. Here we pass the URL of our external service
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
        // Here the first fulfill callback is setup.
        // This callback simply takes an HTTP response and returns the data property..
      .then(response => response.data)
        // .. to the second fulfill callback, which uses React's this.setState
        // function to merge the provided object (which uses ES6 shorthand)
        // with the current object assigned to this.state (which you assigned 
        // in your constructor!)
      .then(topspots => this.setState({ topspots }));
      
      console.log(this.state.topspots);

  }

  render() {
    return (
       <div className='App container'>
        <div className="jumbotron jumbotron-fluid container text-center">
          <h1>San Diego Top Spots</h1>
          <p className="font-weight-light">A list of the top 30 places to see in San Diego, California.</p>
          <hr className="my-4"></hr>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button" onClick={() => this.componentWillMount()}>I'm a sample button!</a>
          </p>
        </div>
        {/* <div className="well well-lg">
          <pre>{ JSON.stringify(this.state.topspots, null, 2) }</pre>
        </div> */}
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
