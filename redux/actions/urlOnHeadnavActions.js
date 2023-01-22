import { SET_SERVICES } from '../type';

export const setServices = (selected) => (dispatch) => {
    dispatch({
        type: SET_SERVICES,
        payload: selected
    });
};
