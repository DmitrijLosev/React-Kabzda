export const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"

export type StateType={
    toggleCollapsed:boolean
}
export type ActionType={
type: string
}
export const reducer = (state: StateType, action: ActionType ):StateType => {
    /*if (action.type===TOGGLE_CONSTANT) {
        return !state
    }
    return state*/
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return {...state,toggleCollapsed:!state.toggleCollapsed}
        default:
            throw new Error("Bad action type")
    }
}
