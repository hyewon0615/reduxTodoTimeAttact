// import uuid from "react-uuid";
import { data } from "../../shared/fakedata";
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";
//action creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};
export const switchTodo = (payload) => {
  return { type: SWITCH_TODO, payload };
};

const initialState = {
  todo: data,
};

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      }; //TODO: 여기 작성

    case DELETE_TODO:
      return {
        ...state,
        todo: action.payload,
      }; //TODO: 여기 작성

    case SWITCH_TODO:
      return {
        ...state,
        todo: action.payload,
      };

    default:
      return state;
  }
};

export default todos;
