import { Action, createReducer, on } from '@ngrx/store';
import { Link } from '../models/links';
import * as linkActions from '../actions/links.actions';

export interface LinkState {
    links: Link[];
    loading: boolean;
    error: string;
}

export const initialState: LinkState = {
    links: [],
    loading: false,
    error: undefined
};

const reducer = createReducer(
    initialState,
    on(linkActions.addLink, (state) => ({ ...state })),
    on(linkActions.addLinkSuccess, (state, { link }) => ({
        ...state,
        links: [...state.links, link]
    })),
    on(linkActions.addLinkFailure, (state) => ({...state})),


    on(linkActions.getLinks, (state) => ({ ...state })),
    on(linkActions.getLinksSuccess, (state, { links }) => ({ ...state, links })),
    on(linkActions.getLinksFailure, (state) => ({ ...state })),


    on(linkActions.editLink, (state) => ({ ...state })),
    on(linkActions.editLinkSuccess, (state, { link }) => ({
        ...state,
        links: state.links.map(element => {
            if (element.id === link.id) { return link; }
            return element;
        })
    })),
    on(linkActions.editLinkFailure, (state) => ({ ...state })),


    on(linkActions.deleteLink, (state) => ({ ...state })),
    on(linkActions.deleteLinkSuccess, (state, { id }) => ({
        ...state,
        links: state.links.filter(element => element.id !== id)
    })),
    on(linkActions.deleteLinkFailure, (state) => ({ ...state }))
);

export function linksReducer(state: LinkState, action: Action): any {
    return reducer(state, action);
}
