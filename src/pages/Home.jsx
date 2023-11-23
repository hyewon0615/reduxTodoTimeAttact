import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import shortid from "shortid";
import { useNavigate } from "react-router-dom";
import { deleteTodo } from "../redux/modules/todos";
const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titlehandler = (event) => {
    setTitle(event.target.value);
  };
  const contentHandler = (event) => {
    setContent(event.target.value);
  };

  const todos = useSelector((state) => {
    return state.todos;
  });

  const dispatch = useDispatch();
  const addTodoHandler = (event) => {
    event.preventDefault();
    return dispatch(
      addTodo({
        title,
        content,
        isdone: false,
        id: shortid.generate(),
      })
    );
  };
  const navigate = useNavigate();
  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <form>
        할일: <input value={title} onChange={titlehandler} />
        내용: <input value={content} onChange={contentHandler} />
        <button onClick={addTodoHandler}>등록</button>
      </form>
      {todos.todo.map((todo) => {
        return (
          <div key={todo.id}>
            <p>{todo.title}</p>
            <p>{todo.content}</p>
            <button
              onClick={() => {
                navigate(`/${todo.id}`);
              }}
            >
              상세보기
            </button>
            <button>완료</button>
            <button
              onClick={() => {
                deleteTodoHandler(todo.id);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
