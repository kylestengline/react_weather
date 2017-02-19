import { FETCH_WEATHER } from '../actions/index';

//putting inside array b/c we're expecting multiple cities
//coming back
export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER: 
      //insert new record with action.payload, then another record
      //where ...state is.
      //ES6 syntax
      return [ action.payload.data, ...state ]; 
      //output from above: [ city, city, city ]
  }

  return state;
}
