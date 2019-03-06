import { action } from 'typesafe-actions';
import { userActionTypes, User } from './types';

export const fetchRequest = () => action(userActionTypes.FETCH_REQUEST);

export const fetchSuccess = (data: User[]) => action(userActionTypes.FETCH_SUCCESS, data);
export const fetchError = (message: string) => action(userActionTypes.FETCH_ERROR, message);