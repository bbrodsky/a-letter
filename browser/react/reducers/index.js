import { combineReducers } from 'redux';

const To = (state = "", action) => {
  switch (action.type) {
    case "SET_TO_FIELD":
      return action.to;
    default: return state;
  }
}
const From = (state = "", action) => {
  switch (action.type) {
    case "SET_FROM_FIELD":
      return action.from;
    default: return state;
  }
}
const Stamp = (state = "1930s-1.png", action) => {
  switch (action.type) {
    case "SET_STAMP":
      return action.stamp;
    default: return state;
  }
}
const Location = (state = "", action) => {
  switch (action.type) {
    case "SET_LOCATION_FIELD":
      return action.location;
    default: return state;
  }
}
const Contents = (state = "", action) => {
  switch (action.type) {
    case "SET_CONTENTS_FIELD":
      return action.contents;
    default: return state;
  }
}

const Send = (state = "", action) => {
  switch (action.type) {
    case "SEND_LETTER":
      return action.send;
    default: return state;
  }
}

const rootReducer = combineReducers({
  To,
  From,
  Stamp,
  Location,
  Contents,
  Send
});

export default rootReducer;
