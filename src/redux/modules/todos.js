// import uuid from "react-uuid";
import { data } from "../../shared/fakedata";
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
//action creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
export const deleteTodo = (id) => {
  return { type: DELETE_TODO, id };
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
      const filtertodo = state.todo.filter((T) => T.id !== action.id);
      return {
        ...state,
        todo: filtertodo,
      }; //TODO: 여기 작성

    case "SWITCH_TODO":
      return; //TODO: 여기 작성

    default:
      return state;
  }
};

export default todos;
