import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import BeerDetails from './components/BeerDetails/BeerDetails'
import Header from './components/Header/Header'
import ListOfBeers from './components/ListOfBeers/ListOfBeers'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path='/' component={ListOfBeers} />
          <Route path="/details/:id" component={BeerDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
