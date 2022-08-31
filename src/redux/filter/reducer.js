import { CHANGESTATUS, CHANGECOLOR } from "./actionTypes";
import { initialState } from "./initialState";

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGESTATUS:
            return {
                ...state,
                status: action.payload
            }
        case CHANGECOLOR:
            const { color, changeType } = action.payload
            switch (changeType) {
                case "added":
                    return {
                        ...state,
                        colors: [...state.colors, color]
                    }
                case "removed":
                    return {
                        ...state,
                        colors: state.colors.filter(clr => clr !== color)
                    }
                default:
                    return state
            }
        default:
            return state
    }
}

export default filterReducer