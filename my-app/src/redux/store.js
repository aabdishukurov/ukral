import { createStore, applyMiddleware } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import {thunk} from 'redux-thunk';
import userReducer from './reducers';

const store = createStore(userReducer, applyMiddleware(thunk));

export default store;


const initialState = {
    inn: '',
    password: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    setINN: (state, action) => {
        state.inn = action.payload;
    },
    setPassword: (state, action) => {
        state.password = action.payload;
    },
    },
});

export const { setINN, setPassword } = userSlice.actions;

// const store = configureStore({
//     reducer: {
//         user: userSlice.reducer,
//     },
// });

// export default store;