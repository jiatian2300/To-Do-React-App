import React from "react";
import { v4 } from "uuid";

const Form = ({ changeTheme, inputText, setInputText, todos, setTodos }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, { text: inputText, completed: false, id: v4() }]);
        setInputText("");
    };

    return (
        <div>
            <header>
                <h1>TODO</h1>
                <div className="theme_toggle" onClick={changeTheme}></div>
            </header>
            <form className="input row">
                <div className="check_box"></div>
                <input
                    type="text"
                    onChange={inputTextHandler}
                    placeholder="Create a new todo..."
                    value={inputText}
                ></input>
                <input type="submit" onClick={submitTodoHandler} hidden />
            </form>
        </div>
    );
};

export default Form;
