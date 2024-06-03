import {
    ADD_TODO,
    FILTER_TODO, MARK_ALL_COMPLETED,
    MARK_COMPLETED,
    MARK_INCOMPLETED,
    REMOVE_TODO,
    TOGGLE_TODO,
    UPDATE_SEARH_TERM
} from "./ActionType";

const initialState = {
    todos: [],
    filter: "ALL",
    searchTerm: ""
}
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos, {text: action.payload.text, completed: false}],//todos cũ + todo mới
                filter: state.filter,
                searchTerm: state.searchTerm
            }
            break;
        case TOGGLE_TODO:
            return {
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id ?
                        {
                            ...todo,
                            completed: !todo.completed
                        } :
                        todo
                ),
                filter: state.filter,
                searchTerm: state.searchTerm
            }
            break;
        case REMOVE_TODO:
            console.log("check remove", action.payload.id)
            return {
                todos: state.todos.filter((todo, index) => index !== action.payload.id),
                filter: state.filter,
                searchTerm: state.searchTerm
            }
            break;
        case MARK_COMPLETED:
            return {
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id ? { ...todo, completed: true } : todo
                ),
                filter: state.filter,
                searchTerm: state.searchTerm
            };
            break;
        case MARK_INCOMPLETED:
            return {
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id ?
                        {...todo, completed: false} :
                        todo
                ),
                filter: state.filter,
                searchTerm: state.searchTerm
            }
            break;
        case FILTER_TODO:
            return {
                todos: state.todos,
                filter: action.payload.filter,
                searchTerm: state.searchTerm
            }
            break;
        case UPDATE_SEARH_TERM:
            return {
                todos: state.todos,
                filter: state.filter,
                searchTerm: action.payload.searchTerm
            }
            break;
        case MARK_ALL_COMPLETED:
            return {
                todos: state.todos.map((todo) => ({
                        ...todo, completed: true
                    })
                ),
                filter: state.filter,
                searchTerm: state.searchTerm
            }
            break;
        default:
            return state
            break;
    }
}
export default todoReducer;