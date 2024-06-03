import {FaCheck, FaTimes, FaToggleOff, FaToggleOn, FaTrash} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {markCompleted, markInCompleted, removeTodo, toggleTodo} from "../redux/Action";
import button from "bootstrap/js/src/button";

export const TodoItem = ({todo, index}) => {
    const dispatch = useDispatch()


    return (
        <li className={"d-flex text-decoration-none align-items-center"}>
            <div className={"d-flex w-100"}>
                <span className={"me-2"}>{index + 1}</span>
                <span className={`${todo.completed ? "text-decoration-line-through" : ""}`}>{todo.text}</span>
            </div>
            <div className={"d-flex"}>
                <button className={"btn btn-outline-info mx-2"}
                        onClick={() => dispatch(toggleTodo(index))}
                >
                    {todo.completed ? <FaToggleOff/> : <FaToggleOn/>}
                </button>

                <button className={"btn btn-outline-danger mx-2"}
                        onClick={() => dispatch(removeTodo(index))}
                >
                    <FaTrash/>
                </button>

                {
                    !todo.completed && (
                        <button className={"btn btn-outline-success mx-2"}
                                onClick={() => dispatch(markCompleted(index))}
                        >
                            <FaCheck/>
                        </button>
                    )
                }
                {
                    todo.completed && (
                        <button className={"btn btn-outline-warning mx-2"}
                                onClick={() => dispatch(markInCompleted(index))}
                        >
                            <FaTimes/>
                        </button>
                    )
                }
            </div>
        </li>
    )
}