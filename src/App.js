import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NameDisplayPage from './Components/NameDisplayPage';
import AnimalDisplayPage from './Components/AnimalDisplayPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './style/style.scss'

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      animal: ""
    }
  }

  handleName = (e) => {
    this.setState({ name: e.target.value })
  }

  handleAnimal = (e) => {
    this.setState({ animal: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <Router>
        <Header />
        <main>
          <Route exact path='/' render={() =>
            <section>
              <h2>Form</h2>

              <form action="">
                <label htmlFor="name">Name: </label>
                <input
                  value={this.state.name}
                  onChange={this.handleName}
                  id="name"
                  type="text"
                  placeholder="Wade Butler"
                />
                <button onClick={this.handleSubmit}>Submit</button>
              </form>

              <form action="">
                <label htmlFor="animal">Animal: </label>
                <input
                  value={this.state.animal}
                  onChange={this.handleAnimal}
                  id="animal"
                  type="text"
                  placeholder="Wolf"
                />
                <button onClick={this.handleSubmit}>Submit</button>
              </form>
            </section>
        } />

          <Route exact path='/name' component={() =>
            <NameDisplayPage nameProp={this.state.name} />
          } />

          <Route exact path='/animal' component={() =>
            <AnimalDisplayPage animalProp={this.state.animal} />
          } />
        </main>
        <Footer />
      </Router>
    );
  }
}

export default App;
