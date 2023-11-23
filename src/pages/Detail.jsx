import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Detail = () => {
  const params = useParams();
  const todos = useSelector((state) => {
    return state.todos;
  });
  const filterTodo = todos.todo.find((todo) => {
    return params.id === todo.id;
  });
  return (
    <div>
      <p>{filterTodo.title}</p>
      <p>{filterTodo.content}</p>
    </div>
  );
};

export default Detail;
