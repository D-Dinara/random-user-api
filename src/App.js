import './App.css';
import { Component } from 'react';

export class App extends Component {
  state = {
      person: null    
    }
  
  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({person: data.results[0]})
    console.log(data.results[0])
  }

  render() {
    return (
      <div>
        {!this.state.person ? <p>Loading...</p> : 
        <div>
          <p>Name: {this.state.person.name.first} {this.state.person.name.last}</p>
          <p>Email: {this.state.person.email}</p>
          <img src={this.state.person.picture.large} alt="person"/>
        </div>
      }
      </div>
    )
  }
}
