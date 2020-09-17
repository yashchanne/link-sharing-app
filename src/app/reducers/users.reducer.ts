import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../models/users';
import * as userActions from '../actions/users.actions';

export const initialState: User = {
    username: '',
    id: 0
};

const reducer = createReducer(
    initialState,
    on(userActions.storeUser, (state, { user }) => ({ ...state, username: user.username, id: user.id })),
    on(userActions.removeUser, (state) => ({ ...state, username: '', id: 0 }))
);

export function userReducer(state: User, action: Action): any {
    return reducer(state, action);
}
