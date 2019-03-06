import { action } from 'typesafe-actions';
import { hierNodesActionTypes, HierNodes } from './types';

export const fetchRequest = () => action(hierNodesActionTypes.FETCH_REQUEST);

export const fetchSuccess = (data: HierNodes[]) => action(hierNodesActionTypes.FETCH_SUCCESS, data);
export const fetchError = (message: string) => action(hierNodesActionTypes.FETCH_ERROR, message);