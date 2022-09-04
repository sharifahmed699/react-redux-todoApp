import { ADDTODO, ALLCOMPLETETODO, COLORSELECTED, DELETETODO, TOGGLETODO, CLEARTODO, LOADED } from "./actionTypes";
import initialState from "./initialState";


const nextTodoId = (todos) => {
    const MaxId = todos.reduce((MaxId, todo) => Math.max(todo.id, MaxId), -1)
    return MaxId + 1
}
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADED:
            return action.payload
        case ADDTODO:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload,
                    completed: false
                }
            ]
        case TOGGLETODO:
            return state.map(todo => {
                if (todo.id !== action.payload) {
                    return todo
                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        case COLORSELECTED:
            return state.map(todo => {
                if (todo.id !== action.payload.todoId) {
                    return todo
                }
                return {
                    ...todo,
                    color: action.payload.color
                }
            })
        case DELETETODO:
            return state.filter(todo => todo.id !== action.payload)
        case ALLCOMPLETETODO:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true
                }
            })
        case CLEARTODO:
            return state.filter(todo => !todo.completed)
        default:
            return state
    }
}
export default todoReducer