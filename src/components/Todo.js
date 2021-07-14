import React from "react";
import check from "../images/icon-check.svg";

const Todo = ({ text, todo, todos, setTodos, provided, snapshot }) => {
    function deleteHandler() {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    function completeHandler() {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
        );
    }

    return (
        <div
            className={`todo row ${todo.completed ? "completed" : ""} ${
                snapshot.isDragging && "dragging"
            }`}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
        >
            <div
                className={`check_box ${todo.completed ? "" : "check_style"}`}
                onClick={completeHandler}
            >
                <img src={check} alt=""></img>
            </div>
            <p>{text}</p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                onClick={deleteHandler}
            >
                <path
                    fill="#494C6B"
                    fillRule="evenodd"
                    d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                />
            </svg>
        </div>
    );
};

export default Todo;
