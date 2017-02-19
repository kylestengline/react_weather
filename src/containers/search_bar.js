import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

  //if you have a callback that makes a reference to this,
  //you need to bind it.
    this.onInputChange = this.onInputChange.bind(this);
  }

  // onChange, onInputChange or onAnything,
  // we always use the event object
  // this is a vanilla js thing not react
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  //telling browser, "Don't Submit Form"
  onFormSubmit(event) {
    event.preventDefault();  
  }

  render() {
    return (
      <form onSubmit={ this.onFormSubmit } className="input-group">
        <input 
          placeholder="Get a Five Day Forecast in your Favorite Cities"
          className="form-control"
          value={ this.state.term }
          onChange={ this.onInputChange } />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
