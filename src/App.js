import "./App.css";
import React, { useState } from "react";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import { useEffect } from "react";

function App() {
    const [theme, setTheme] = useState("light");
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [filter, setFilter] = useState("All");

    // Runs once on page load: Get theme and todo list from local storage
    useEffect(() => {
        function getLocalStorage() {
            if (localStorage.getItem("todos") === null) {
                localStorage.setItem("todos", JSON.stringify([]));
            } else {
                let local = JSON.parse(localStorage.getItem("todos"));
                setTodos(local);
            }

            if (localStorage.getItem("theme") === null) {
                localStorage.setItem("theme", "light");
            } else {
                setTheme(localStorage.getItem("theme"));
            }
        }
        getLocalStorage();
    }, []);

    useEffect(() => {
        // Filter the todo list whenever the filter is changed or when a new todo is added
        function filterHandler() {
            switch (filter) {
                case "Completed":
                    setFilteredTodos(
                        todos.filter((todo) => todo.completed === true)
                    );
                    break;
                case "Active":
                    setFilteredTodos(
                        todos.filter((todo) => todo.completed === false)
                    );
                    break;
                default:
                    setFilteredTodos(todos);
                    break;
            }
        }

        // save the updated todo list and theme to local storage when changed
        function saveToLocalStorage() {
            localStorage.setItem("todos", JSON.stringify(todos));
            localStorage.setItem("theme", theme);
        }

        filterHandler();
        saveToLocalStorage();
    }, [todos, filter, theme]);

    function changeTheme() {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    return (
        <div className={`App ${theme}`} id="bg">
            <div className="hero_img"></div>
            <div className="container">
                <Form
                    changeTheme={changeTheme}
                    todos={todos}
                    setTodos={setTodos}
                    inputText={inputText}
                    setInputText={setInputText}
                />
                <TodoList
                    todos={todos}
                    setTodos={setTodos}
                    setFilter={setFilter}
                    filteredTodos={filteredTodos}
                />
                <p className="drag">Drag and drop to reorder list</p>
            </div>
        </div>
    );
}

export default App;
