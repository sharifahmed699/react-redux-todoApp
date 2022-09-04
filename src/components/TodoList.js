import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTodos from "../redux/todos/thunk/fetchTodos";
import Todo from "./Todo";

export default function TodoList() {
    const todos = useSelector((state) => state.todos)
    const filters = useSelector((state) => state.filter)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTodos)
    }, [])
    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {
                todos
                    .filter(todo => {
                        const { status } = filters
                        switch (status) {
                            case "Complete":
                                return todo.completed
                            case "Incomplete":
                                return !todo.completed
                            default:
                                return todo
                        }
                    })
                    .filter(todo => {
                        const { colors } = filters
                        if (colors.length > 0) {
                            return colors.includes(todo?.color)
                        }
                        return true
                    })
                    .map((todo) => (
                        <Todo todo={todo} key={todo.id} />
                    ))
            }
        </div>
    );
}
