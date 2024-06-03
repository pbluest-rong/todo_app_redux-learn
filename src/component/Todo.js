// react-icons: npm install react-icons --save
import {BsPlus, BsSearch} from "react-icons/bs";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, filterTodos, markAllCompleted, updateSearchTerm} from "../redux/Action";
import TodoList from "./TodoList";

const Todo = () => {
    const dispatch = useDispatch();
    const [newTodoText, setNewToDoText] = useState("");//addTodo
    // console.log("Dùng useState lấy text là: ", newTodoText)
    const [searchTerm, setSearchTerm] = useState("");//search
    const currentFilter = useSelector(state => state.filter)
    const handleAddTodoClick = () => {
        if (newTodoText.trim() !== "") {
            dispatch(addTodo(newTodoText.trim()))
            setNewToDoText("")
        }
    }
    const handleSearchChange = (value) => {
        setSearchTerm(value);
        dispatch(updateSearchTerm(value))
    }
    const handleFilter = (filter) => {
        dispatch(filterTodos(filter))
    }


    return (
        <div className={"container w-50 bg-light p-3 justify-content-center"}>
            <h2 className={"text-center"}>PERSONAL TODO APP</h2>
            {/*    input text and btn */}
            {/*add todo*/}
            <div className={"justify-content-between d-flex py-2"}>
                <input type="text" id="addTodoInput" placeholder={"Add Todo"}
                       className={"w-100 p-2 focus-ring focus-ring-info"}
                       value={newTodoText}
                       onChange={(e) => setNewToDoText(e.target.value)}
                />
                <button className={"w-25 bg-primary rounded-2 border-0"}
                        onClick={handleAddTodoClick}
                ><BsPlus/></button>
            </div>
            {/*    filter and search*/}
            <div className={"justify-content-between d-flex py-2"}>
                <select className={"text-center rounded"}
                        value={currentFilter}
                        onChange={(e) => handleFilter(e.target.value)}
                >
                    <option value="ALL">Default</option>
                    <option value="COMPLETED">Completed</option>
                    <option value="INCOMPLETED">Incompleted</option>
                </select>

                <button className={"w-25 btn btn-success mx-2"}
                        onClick={() => dispatch(markAllCompleted())}>
                    Mark All Completed
                </button>

                <input type="text" id="addTodoInput" placeholder={"Search"}
                       className={"w-100 p-2 focus-ring focus-ring-info ms-5"}
                       value={searchTerm}
                       onChange={(e) => handleSearchChange(e.target.value)}
                />
                <button className={"w-25 bg-primary rounded-2 border-0"}
                        onClick={handleAddTodoClick}>
                    <BsSearch/>
                </button>
            </div>
            {/*    todolist*/}
            <div>
                <TodoList/>
            </div>
        </div>
    )
}
export default Todo;