import React, { useState } from "react";
import { useEffect } from "react";
import Todo from "./Todo";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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

    function handleOnDragEnd(result) {
        if (!result.destination) return;
        const list = Array.from(todos);
        const [reorderedItem] = list.splice(result.source.index, 1);
        list.splice(result.destination.index, 0, reorderedItem);

        setTodos(list);
    }

    return (
        <div>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="List">
                    {(provided) => (
                        <div
                            className=" todo-list"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {filteredTodos.map((todo, index) => (
                                <Draggable
                                    key={todo.id}
                                    draggableId={todo.id}
                                    index={index}
                                >
                                    {(provided, snapshot) => (
                                        <Todo
                                            provided={provided}
                                            snapshot={snapshot}
                                            key={todo.id}
                                            text={todo.text}
                                            todo={todo}
                                            todos={todos}
                                            setTodos={setTodos}
                                        />
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                            <div className="details row">
                                <p>{left} items left</p>
                                <p className="clear" onClick={clearCompleted}>
                                    Clear Completed
                                </p>
                            </div>
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
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
