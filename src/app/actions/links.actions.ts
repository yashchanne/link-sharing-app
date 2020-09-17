import { createAction, props } from '@ngrx/store';
import { Link } from '../models/links';
import { User } from '../models/users';

export const addLink = createAction('[Link] add link', props<{ link: Link }>());
export const addLinkSuccess = createAction('[Link] add link success', props<{ link: Link }>());
export const addLinkFailure = createAction('[Link] add link failure');

export const getLinks = createAction('[Link] get links', props<{ user: User }>());
export const getLinksSuccess = createAction('[Link] get links success', props<{ links: Link[] }>());
export const getLinksFailure = createAction('[Link] get links failure');

export const editLink = createAction('[Link] edit link', props<{ link: Link, id: number }>());
export const editLinkSuccess = createAction('[Link] edit link success', props<{ link: Link }>());
export const editLinkFailure = createAction('[Link] edit link failure');

export const deleteLink = createAction('[Link] delete link', props<{ id: number }>());
export const deleteLinkSuccess = createAction('[Link] delete link success', props<{ id: number }>());
export const deleteLinkFailure = createAction('[Link] delete link failure');
