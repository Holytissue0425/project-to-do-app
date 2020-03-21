import React, { useEffect, useState } from "react";
import ToDoListItem from './ToDoListItem';

const todoListEmpty = Component => props =>
  props.title === "" ? <div>Nothing</div> : <Component {...props} />;
const ToDoList = todoListEmpty(ToDoListItem);

const Todo = props => {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todoList")) || []);
  const [doneList, setDoneList] = useState(JSON.parse(localStorage.getItem("doneList")) || []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);
  
  useEffect(() => {
    localStorage.setItem("doneList", JSON.stringify(doneList));
  }, [doneList]);

  function add(e) {
    e.preventDefault();

    const titleElement = document.getElementById("title");
    const descriptionElement = document.getElementById("description");

    if (titleElement.value === "") return;
    else {
      let _todoList = todoList.concat({
        title: titleElement.value,
        description: descriptionElement.value
      });

      setTodoList(_todoList);
      titleElement.value = "";
      descriptionElement.value = "";
    }
  }

  function remove(todo) {
    let _doneList = doneList.concat({
      title: todo.title,
      description: todo.description
    });

    setTodoList(todoList.filter(x => x !== todo));
    setDoneList(_doneList);
  }
  
  return (
    <div className="App">
      <div className="add-form">
        <div>
          <input id="title" placeholder="title" />
          <input id="description" placeholder="description" />
        </div>
        <div>
          <button onClick={e => add(e)}>Add</button>
          <button onClick={() => props.history.push("/")}>Back</button>
        </div>
      </div>
      <div>
        {todoList.length < 1 ? (
          <div> Nothing </div>
        ) : (
          todoList.map(todo => (
            <ToDoList
              key={todo.title}
              title={todo.title}
              description={todo.description}
              onClick={() => remove(todo)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Todo;