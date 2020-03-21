import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo">ToDoList</Link>
          </li>
          <li>
            <Link to="/done">DoneList</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;