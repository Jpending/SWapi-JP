import React from 'react';
import './App.css';
import GenErr from './Error/GenErr';
import DisplayResults from './Results/DisplayResults';
import FetchErr from './Error/FetchErr'
import SearchBar from './SearchBar/SearchBar';
import Context from './Context';

export default class App extends React.Component {
  state = {
    urlFilter: '',
    query: '',
    results: [],
  };



  addResults = (list) => {
    this.setState({ results: list });
  };

  render() {
    const { results } = this.state;
    console.log('results', results);
    const value = { addNewList: this.addResults };
    return (
      <GenErr>
        <div className='App'>
          <header className='App-header'>
            <h1>Begin Your Search . . .</h1>
          </header>
          <Context.Provider value={value}>
            <FetchErr>
            <SearchBar />
            </FetchErr>
            <DisplayResults fullList={results} />
          </Context.Provider>
        </div>
      </GenErr>
    );
  }
}
