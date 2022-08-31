import { ADDTODO, ALLCOMPLETETODO, CLEARTODO, COLORSELECTED, DELETETODO, TOGGLETODO } from "./actionTypes"

export const addTodo = (value) => {
    return {
        type: ADDTODO,
        payload: value
    }
}

export const toggleTodo = (todoId) => {
    return {
        type: TOGGLETODO,
        payload: todoId
    }
}

export const colorSelect = (todoId, color) => {
    return {
        type: COLORSELECTED,
        payload: {
            todoId,
            color
        }
    }
}
export const deleteTodo = (todoId) => {
    return {
        type: DELETETODO,
        payload: todoId
    }
}
export const allCompleteTodo = () => {
    return {
        type: ALLCOMPLETETODO
    }
}
export const allClearTodo = () => {
    return {
        type: CLEARTODO
    }
}