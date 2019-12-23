import React, { Component } from "react";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/searchBox/search-box";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFieldText: ""
    };
  }

  componentDidMount() {
    console.log("Mounted");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchFieldText } = this.state;
    const filteredMonstersList = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFieldText.toLowerCase())
    );
    return (
      <div className="App">
      <h1>Monsters </h1>
      <SearchBox
      placeholder="Search Monster"
      handleChange={e => this.setState({ searchFieldText: e.target.value })}
    />

        <CardList monsters={filteredMonstersList} />
      </div>
    );
  }
}

export default App;
