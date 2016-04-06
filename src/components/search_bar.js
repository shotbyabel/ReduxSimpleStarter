import React, { Component } from 'react';
//DEFINE COMPONENT
//const SearchBar = () => { //function
//return <input />//jsx
//};

//D E C L A R E  a  N E W  C L A S S 

class SearchBar extends Component {
  //constructor
  constructor(props) {
    super(props);//calling parent method

    this.state = { term: ''};
  }

  render() {

    return (
      <div>
      <input
        value ={this.state.term} 
      onChange={event => this.setState({ term: event.target.value })} />
    </div>
    );
  }
    // return <input onChange={this.onInputChange} />;
    //   return <input onChange={event => console.log(event.target.value)} />;
//event handler 
// onInputChange(event) {
//   console.log(event.target.value);
//   // console.log(event);
//   }
}

export default SearchBar;