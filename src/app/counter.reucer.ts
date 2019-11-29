import * as counterAction from './counter.actions'
import { createReducer, on, Action } from '@ngrx/store'
export interface State {
    count: number;
    operator: string;
    action: string;
}
export const initialState: State = {
    count: 50,
    operator: '--',
    action: '--'
};
const counterReducer = createReducer(
    initialState,
    on(counterAction.increment, (state, { operator, action }) => ({
        ...state,
        count: state.count + 1,
        operator,
        action
    })),
    on(counterAction.decrement, (state, { operator, action }) => ({
        ...state,
        count: state.count - 1,
        operator,
        action
    })),
    on(counterAction.reset, (state, { operator, action }) => ({
        ...state,
        count: initialState.count,
        operator,
        action
    })),

)
export function reducer(state: State | undefined, action: Action) {
    console.log(counterReducer(state, action));
    return counterReducer(state, action);
}