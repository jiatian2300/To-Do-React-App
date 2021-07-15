import "./App.css";
import React, { useState } from "react";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import { useEffect } from "react";
import firebase from "./util/firebase";

function App() {
    const [theme, setTheme] = useState("light");
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [filter, setFilter] = useState("All");

    const DBref = firebase.database().ref("Todo");
    const [firstLoad, setFirstLoad] = useState(true);

    // Runs once on page load: Get theme from local storage and todo list from Firebase
    useEffect(() => {
        function getTodoFromFirebase() {
            var temp = [];
            DBref.once("value", (snapshot) => {
                snapshot.forEach((data) => {
                    const info = data.val();
                    temp.push({
                        text: info.text,
                        completed: info.completed,
                        id: info.id,
                    });
                });
                setFirstLoad(false);
                setTodos(temp);
            });
        }

        function getTheme() {
            if (localStorage.getItem("theme") === null) {
                localStorage.setItem("theme", "light");
            } else {
                setTheme(localStorage.getItem("theme"));
            }
        }

        getTodoFromFirebase();
        getTheme();
    }, []);

    // exports.dbTest = functions.database
    //     .ref("/Todo")
    //     .onUpdate((change, context) => {
    //         console.log(change);
    //     });

    // Filter the todo list whenever the filter is changed or when a new todo is added
    useEffect(() => {
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

        filterHandler();
    }, [filter, todos]);

    useEffect(() => {
        function saveTodoToFirebase() {
            if (firstLoad === true) return;
            DBref.remove();
            todos.map((todo) => DBref.push(todo));
        }

        saveTodoToFirebase();
    }, [todos]);

    // save the updated theme to local storage when changed
    useEffect(() => {
        function saveTheme() {
            localStorage.setItem("theme", theme);
        }
        saveTheme();
    }, [theme]);

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
                    filter={filter}
                    setFilter={setFilter}
                    filteredTodos={filteredTodos}
                />
                <p className="drag">Drag and drop to reorder list</p>
            </div>
        </div>
    );
}

export default App;
