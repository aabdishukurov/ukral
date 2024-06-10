export const SET_USER_DATA = 'SET_USER_DATA';

export const setUserData = (inn, password) => ({
    type: SET_USER_DATA,
    payload: { inn, password }
});