import { CHANGECOLOR, CHANGESTATUS } from "./actionTypes"

export const changeColor = (color, changeType) => {
    return {
        type: CHANGECOLOR,
        payload: {
            color,
            changeType
        }
    }
}
export const changeStatus = (status) => {
    return {
        type: CHANGESTATUS,
        payload: status
    }
}