import { SET_SERVICES, SET_HOME, SET_WHYUS, SET_OURPROJECT, SET_CONTACT } from '../type';

const initialState = {
    show_aboutServices: 'aboutServices',
    show_aboutHome: 'aboutHome',
    show_aboutWhyus: 'aboutWhyus',
    show_aboutOurproject: 'aboutOurproject',
    show_contact: 'aboutContact'
};

export default function urlHeadnavReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SERVICES:
            return {
                ...state,
                show_aboutServices: action.payload
            };
        case SET_HOME:
            return {
                ...state,
                show_aboutHome: action.payload
            };
        case SET_WHYUS:
            return {
                ...state,
                show_aboutWhyus: action.payload
            };
        case SET_OURPROJECT:
            return {
                ...state,
                show_aboutOurproject: action.payload
            };
        case SET_CONTACT:
            return {
                ...state,
                show_contact: action.payload
            };
        default:
            return state;
    }
}
