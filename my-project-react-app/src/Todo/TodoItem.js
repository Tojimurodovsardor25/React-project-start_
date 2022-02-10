import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./Todo.css";
import Context from "../context";

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);
  const classes = [];
  if (todo.completed) {
    classes.push("done");
  }
  return (
    <li className="li-item">
      <span className={classes.join(" ")}>
        {index + 1}
        <b>
          {" "}
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onChange(todo.id)}
            className="input"
          />
        </b>
        &nbsp; {todo.title}
      </span>
      {/* <button className="btn" onClick={() => removeTodo(todo.id)}> */}
      <button className="btn" onClick={removeTodo.bind(null, todo.id)}>
        &times;
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default TodoItem;
