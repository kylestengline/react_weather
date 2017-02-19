import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

  //if you have a callback that makes a reference to this,
  //you need to bind it.
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // onChange, onInputChange or onAnything,
  // we always use the event object
  // this is a vanilla js thing not react
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  //user clicks or hits submit,
  //call action creator with term they entered.
  //then setState to empty string causes form to 
  //re-render after submission.
  onFormSubmit(event) {
    event.preventDefault();  

    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
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

//Causes action creator to bind with dispatch and flows down middleware and reducers
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

//when you use export default here, remember to take out
//export default from class component up top.
export default connect(null, mapDispatchToProps)(SearchBar);
