import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, switchTodo } from "../redux/modules/todos";
import shortid from "shortid";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;
const FromSt = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  gap: 1rem;
`;
const InputSt = styled.input`
  width: 30rem;
  height: 2rem;
  border-radius: 1rem;
  padding-left: 1rem;
`;
const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleOnchange = (event) => {
    setTitle(event.target.value);
  };
  const contentOnchange = (event) => {
    setContent(event.target.value);
  };
  const todos = useSelector((state) => {
    return state.todos.todo;
  });
  const dispatch = useDispatch();
  const addListhandler = (event) => {
    event.preventDefault();
    dispatch(
      addTodo({
        id: shortid.generate(),
        title,
        content,
        isDone: false,
      })
    );
    setContent("");
    setTitle("");
  };
  const deleteHandler = (id) => {
    const deletefilter = todos.filter((t) => {
      return t.id !== id;
    });
    dispatch(deleteTodo(deletefilter));
  };
  const changeIsdoneHandler = (id) => {
    const change = todos.map((item) => {
      return item.id === id ? { ...item, isDone: !item.isDone } : item;
    });
    dispatch(switchTodo(change));
  };
  const navigate = useNavigate();

  return (
    //중복 리팩토링 아직도 잘 모르겠어요.. 8차 강의를.. 네..
    <Container>
      <h1>TodoList 언제 잘해지나</h1>
      <FromSt onSubmit={addListhandler}>
        <InputSt
          value={title}
          onChange={titleOnchange}
          placeholder="할일을 입력하세요"
        />
        <InputSt
          value={content}
          onChange={contentOnchange}
          placeholder="상세하게 적어주세요"
        />
        <button type="submit">등록</button>
      </FromSt>
      <ul>
        <h2>Working Area</h2>
        {todos
          .filter((t) => {
            return t.isDone === false;
          })
          .map((todo) => {
            return (
              <li key={todo.id}>
                <h3>{todo.title}</h3>
                <button onClick={() => deleteHandler(todo.id)}>삭제</button>
                <button onClick={() => changeIsdoneHandler(todo.id)}>
                  완료
                </button>
                <button
                  onClick={() => {
                    navigate(`/${todo.id}`);
                  }}
                >
                  상세보기
                </button>
              </li>
            );
          })}
        <h2>Done Area</h2>
        {todos
          .filter((t) => {
            return t.isDone === true;
          })
          .map((todo) => {
            return (
              <li key={todo.id}>
                <h3>{todo.title}</h3>
                <button onClick={() => deleteHandler(todo.id)}>삭제</button>
                <button onClick={() => changeIsdoneHandler(todo.id)}>
                  취소
                </button>
                <button
                  onClick={() => {
                    navigate(`/${todo.id}`);
                  }}
                >
                  상세보기
                </button>
              </li>
            );
          })}
      </ul>
    </Container>
  );
};

export default Home;
