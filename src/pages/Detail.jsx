import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate, useParams } from "react-router-dom";
import { deleteTodo } from "../redux/modules/todos";
const Detail = () => {
  const todos = useSelector((state) => {
    return state.todos.todo;
  });
  const param = useParams();
  const detailTodo = todos.find((todo) => {
    return todo.id === param.id;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteHandler = (id) => {
    const deletefilter = todos.filter((t) => {
      return t.id !== id;
    });
    dispatch(deleteTodo(deletefilter));
    navigate(`/`);
  };

  return (
    <div>
      <h3>{detailTodo.title}</h3>
      <p>{detailTodo.content}</p>
      <p>{String(detailTodo.isDone)}</p>
      <button onClick={() => deleteHandler(detailTodo.id)}>삭제</button>
    </div>
  );
};

export default Detail;
