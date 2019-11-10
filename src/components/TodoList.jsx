import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_CHECK, REMOVE } from "../modules/reducers/todos";
import { insert } from "../modules/reducers/todos";

const TodoItem = ({ todo }) => {
  const { id, title, done } = todo;
  const dispatch = useDispatch();
  console.log(id);
  return (
    <li style={{ textDecoration: done ? "line-through" : "none" }}>
      <span onClick={() => dispatch({ type: TOGGLE_CHECK, id: id })}>
        {" "}
        {title}
      </span>{" "}
      <button onClick={() => dispatch({ type: REMOVE, id: id })}>삭제</button>
    </li>
  );
};

export const TodoItems = () => {
  const todos = useSelector(state => state.todos);
  console.log(todos.todos);
  return (
    <>
      {todos.todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
};

const TodoList = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const onChange = useCallback(e => {
    setTitle(e.target.value);
  }, []);
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(insert(title));
      setTitle("");
    },
    [dispatch, title]
  );

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <input onChange={onChange} value={title} />
          <button type="submit">추가</button>
        </form>
        <ul>{<TodoItems />}</ul>
      </div>
    </>
  );
};

export default TodoList;
