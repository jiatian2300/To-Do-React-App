import React, { useState } from "react";
import { useEffect } from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, setFilter, filteredTodos }) => {
    const [left, setLeft] = useState(0);
    const [activeFilter, setActiveFilter] = useState([true, false, false]);

    useEffect(() => {
        setLeft(todos.length);
    }, [todos.length]);

    function changeFilter(e) {
        setFilter(e.target.innerHTML);
        switch (e.target.innerHTML) {
            case "Active":
                setActiveFilter([false, true, false]);
                break;
            case "Completed":
                setActiveFilter([false, false, true]);
                break;
            default:
                setActiveFilter([true, false, false]);
                break;
        }
    }

    function clearCompleted() {
        setTodos(todos.filter((todo) => todo.completed === false));
    }

    return (
        <div>
            <div className=" todo-list">
                {filteredTodos.map((todo) => (
                    <Todo
                        key={todo.id}
                        text={todo.text}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                    />
                ))}
                <div className="details row">
                    <p>{left} items left</p>
                    <p className="clear" onClick={clearCompleted}>
                        Clear Completed
                    </p>
                </div>
            </div>
            <div className="filters" onClick={changeFilter}>
                <h2 className={`${activeFilter[0] ? "active_filter" : ""}`}>
                    All
                </h2>
                <h2 className={`${activeFilter[1] ? "active_filter" : ""}`}>
                    Active
                </h2>
                <h2 className={`${activeFilter[2] ? "active_filter" : ""}`}>
                    Completed
                </h2>
            </div>
        </div>
    );
};

export default TodoList;
