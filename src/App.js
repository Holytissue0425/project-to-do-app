import React, { Component } from "react";
import "./css/App.css";
import "./css/ToDoListItem.css";
import "./css/DoneListItem.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isShow: false,
      todoList: JSON.parse(localStorage.getItem("todoList")) || [],
      doneList: JSON.parse(localStorage.getItem("doneList")) || []
    };

    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onAdd(e) {
    e.preventDefault();

    const titleElement = document.getElementById("title");
    const descriptionElement = document.getElementById("description");

    if (titleElement.value === "") return;
    else {
      this.setState(
        {
          todoList: this.state.todoList.concat({
            title: titleElement.value,
            description: descriptionElement.value
          })
        },
        () => {
          titleElement.value = "";
          descriptionElement.value = "";
          localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
        }
      );
    }
  }

  onDelete(todo) {
    console.log(todo);
    this.setState(
      {
        todoList: this.state.todoList.filter(x => x !== todo),
        doneList: this.state.doneList.concat({
          title: todo.title,
          description: todo.description
        })
      },
      () => {
        localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
        localStorage.setItem("doneList", JSON.stringify(this.state.doneList));
      }
    );
  }

  render() {
    return (
      <div className="App">
        <div className="add-form">
          <div>
            <input id="title" placeholder="title" />
            <input id="description" placeholder="description" />
          </div>
          <div>
            <button onClick={e => this.onAdd(e)}>Add</button>
            <button onClick={() => this.setState({ isShow: !this.state.isShow })}>
              Show Done List
            </button>
          </div>
        </div>
        <div>
          {this.state.todoList.length < 1 ? (
            <div> Nothing </div>
          ) : (
            this.state.todoList.map(todo => (
              <ToDoListItem
                key={todo.title}
                title={todo.title}
                description={todo.description}
                onClick={() => {
                  this.onDelete(todo);
                }}
              />
            ))
          )}
        </div>
        <hr />
        <div className="done-list">
          {!this.state.isShow ? null
          :
          this.state.doneList.map(todo => (
            <DoneListItem
              key={todo.title}
              title={todo.title}
              description={todo.description}
            />
          ))
          }
        </div>
      </div>
    );
  }
}

const ToDoListItem = props => {
  const { title, description } = props;

  return (
    <div className="ToDoListItem" {...props}>
      <div className="ToDoListItem-title">{title}</div>
      <div className="ToDoListItem-description">{description}</div>
    </div>
  );
};

const DoneListItem = props => {
  const { title, description } = props;

  return (
    <div className="DoneListItem" {...props}>
      <div className="DoneListItem-title">{title}</div>
      <div className="DoneListItem-description">{description}</div>
    </div>
  );
};

// const todoListEmpty = (Component) => (props) => props.title === "" ? <div>Nothing</div> : <Component { ...props }/>;

// const ToDoList = todoListEmpty(ToDoListItem);

export default App;
