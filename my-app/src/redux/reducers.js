import { SET_USER_DATA } from './actions';

const initialState = {
    inn: '',
    password: ''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
            ...state,
            inn: action.payload.inn,
            password: action.payload.password
        };
    default:
        return state;
    }
};

export default userReducer;
