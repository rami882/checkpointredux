import {
  ADD,
  COMPLETE,
  DECREMENT,
  DELETE,
  EDIT,
  FILTER,
  INCREMENT,
} from './actionTypes';

// this is our initial data
const initialState = {
  count: 0,
  tasks: [
    {id: Math.random(), action: 'wake up', isDone: true},
    {id: Math.random(), action: 'have coffee', isDone: true},
    {id: Math.random(), action: 'go out', isDone: false},
  ],
  filter: false,
};

// reducer is a function that takes in state and the action object as
//parameters

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case DELETE:
      return {
        ...state,
        tasks: state.tasks.filter((el) => el.id !== payload),
      };
    case COMPLETE:
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === payload ? {...el, isDone: !el.isDone} : el
        ),
      };
    case ADD:
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };
    case EDIT:
      return {
        ...state,
        tasks: state.tasks.map((el) => (el.id === payload.id ? payload : el)),
      };
    case FILTER:
      return {
        ...state,
        filter: !state.filter,
      };
    default:
      return state; // default case always returns the state
  }
};

export default reducer;
