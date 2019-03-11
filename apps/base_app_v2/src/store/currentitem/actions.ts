import { action } from 'typesafe-actions';
import { currentItemActionTypes, CurrentItem } from './types';

export const fetchRequest = () => action(currentItemActionTypes.FETCH_REQUEST);

export const fetchSuccess = (data: CurrentItem[]) => action(currentItemActionTypes.FETCH_SUCCESS, data);
export const fetchError = (message: string) => action(currentItemActionTypes.FETCH_ERROR, message);