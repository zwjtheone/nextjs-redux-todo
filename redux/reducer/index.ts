import { api } from '../../services/auth';
import authReducer from '../slice/auth';
import todoReducer from '../slice/todo';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({ [api.reducerPath]: api.reducer, auth: authReducer, todoReducer });
