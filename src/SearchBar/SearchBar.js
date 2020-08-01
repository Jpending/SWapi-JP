import React from 'react';
import Filter from './Filter';
import QueryBox from './QueryBox';
import Context from '../Context';
import { trackPromise } from 'react-promise-tracker';

export default class SearchBar extends React.Component {
  static contextType = Context;
  state = { urlFilter: 'planets', query: '' };

  handleFilter = (value) => {
    this.setState({ urlFilter: value });
  };

  handleQuery = (value) => {
    this.setState({ query: value });
  };

  generatePage(){
    const {query}=this.state
    let num;
    if(query.length>1){num=1}
    else{ num=Math.floor(Math.random() * (4 - 1) + 1)}
    return num
  }

  formatURL() {
    const {urlFilter, query } = this.state;
    const page=this.generatePage();

    return `https://swapi-thinkful.herokuapp.com/api/${urlFilter}/?page=${page}&search=${query}`;
  }

  handleSubmit = () => {
    console.log('wasClicked');
    const url = this.formatURL();
    const { addNewList } = this.context;
    console.log(url);
    let error;
    return (
      trackPromise(
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            error = { code: res.status };
            if (!res.headers.get('content-type').includes('json')) {
              error.message = res.statusText;
              return Promise.reject(error);
            }
          }
          return res.json();
        })
        .then((data) => {
          if (error) {
            error.message = data.message;
            return Promise.reject(error);
          }
          return data;
        })
        .then((data) => addNewList(data.results))
    ));
  };

  render() {
    const value = {
      handleFilter: this.handleFilter,
      handleQuery: this.handleQuery,
    };
    return (
      <Context.Provider value={value}>
        <div className='searchContainer'>
          <QueryBox />
          <span>I'm looking for a:</span>
          <Filter />
          <button type='submit'>Reset </button>
          <button type='submit' onClick={() => this.handleSubmit()}>
            Search
          </button>
        </div>
      </Context.Provider>
    );
  }
}
