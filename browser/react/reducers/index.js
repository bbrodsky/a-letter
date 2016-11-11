import { combineReducers } from 'redux';

const To = (state = "", action) => {
  switch (action.type) {
    case "SET_TO_FIELD": return action.to;
    default: return state;
  }
}
const From = (state = "", action) => {
  switch (action.type) {
    case "SET_FROM_FIELD": return action.from;
    default: return state;
  }
}
const Location = (state = "", action) => {
  switch (action.type) {
    case "SET_LOCATION_FIELD": return action.location;
    default: return state;
  }
}
const Content = (state = "", action) => {
  switch (action.type) {
    case "SET_CONTENT_FIELD": return action.content;
    default: return state;
  }
}

const rootReducer = combineReducers({
  To,
  From,
  Location,
  Content
});

export default rootReducer;
