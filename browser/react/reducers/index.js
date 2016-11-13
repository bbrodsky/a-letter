import { combineReducers } from 'redux';
import store from '../store';


const to = (state = "", action) => {
  switch (action.type) {
    case "SET_TO_FIELD":
      return action.to;
    default: return state;
  }
}
const from = (state = "", action) => {
  switch (action.type) {
    case "SET_FROM_FIELD":
      return action.from;
    default: return state;
  }
}
const stamp = (state = "1930s-1.png", action) => {
  switch (action.type) {
    case "SET_STAMP":
      return action.stamp;
    default: return state;
  }
}
const location = (state = "Location", action) => {
  switch (action.type) {
    case "SET_LOCATION_FIELD":
      return action.location;
    default: return state;
  }
}
const contents = (state = "", action) => {
  switch (action.type) {
    case "SET_CONTENTS_FIELD":
      return action.contents;
    default: return state;
  }
}

const id = (state = "", action) => {
  switch (action.type) {
    case "SEND_LETTER":
      return action.id;
    default: return state;
  }
}

const rootReducer = combineReducers({
  to,
  from,
  stamp,
  location,
  contents,
  id
});

export default rootReducer;
