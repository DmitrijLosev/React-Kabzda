import {ActionType, reducer, StateType, TOGGLE_CONSTANT} from "./reducer";

test("reducer should change collapsed to opposite false", () => {
    const state: StateType = {toggleCollapsed: false}
    const action: ActionType = {type: TOGGLE_CONSTANT}
const newState:StateType=reducer(state, action)
    expect(newState.toggleCollapsed).toBe(true)

})

test("reducer should change collapsed to opposite true", () => {
    const state: StateType = {toggleCollapsed: true}
    const action: ActionType = {type: TOGGLE_CONSTANT}
    const newState:StateType=reducer(state, action)
    expect(newState.toggleCollapsed).toBe(false)

})

test("reducer should not change state with error", () => {
    const state: StateType = {toggleCollapsed: false}
    const action = {type: "FAKE"}

    expect(()=>reducer(state, action)).toThrowError()

})