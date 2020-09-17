import { createAction, props } from '@ngrx/store';
import { User } from '../models/users';

export const storeUser = createAction('[User] store user', props<{user: User}>());
export const removeUser = createAction('[User] remove user');
