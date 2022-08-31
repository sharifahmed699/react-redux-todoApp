import { useDispatch, useSelector } from "react-redux";
import { changeStatus, changeColor } from "../redux/filter/actions"
const numberOfTodos = (num_of_todo) => {
    switch (num_of_todo) {
        case 0:
            return "No task"
        case 1:
            return "1 Task"
        default:
            return `${num_of_todo} tasks`
    }
}

export default function Footer() {
    const todos = useSelector((state) => state.todos)
    const remainingTodo = todos.filter(todo => !todo.completed).length

    const filters = useSelector((state) => state.filter)

    const { status, colors } = filters

    const dispatch = useDispatch()

    const handleStatusChange = (status) => {
        dispatch(changeStatus(status))
    }
    const handleColorChange = (color) => {
        if (colors.includes(color)) {
            dispatch(changeColor(color, "removed"))
        }
        else {
            dispatch(changeColor(color, "added"))
        }
    }
    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{numberOfTodos(remainingTodo)} left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li className={`cursor-pointer ${status === "All" && "font-bold"}`} onClick={() => handleStatusChange("All")}>All</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === "Incomplete" && "font-bold"}`} onClick={() => handleStatusChange("Incomplete")}>Incomplete</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === "Complete" && "font-bold"}`} onClick={() => handleStatusChange("Complete")}>Complete</li>
                <li></li>
                <li></li>
                <li className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes("green") && "bg-green-500"}`} onClick={() => handleColorChange("green")}></li>
                <li className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes("red") && "bg-red-500"}`} onClick={() => handleColorChange("red")}></li>
                <li className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes("yellow") && "bg-yellow-500"}`} onClick={() => handleColorChange("yellow")}></li>
            </ul>
        </div >
    );
}