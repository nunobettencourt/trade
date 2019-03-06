import { action } from 'typesafe-actions';
import { {{sentenceCase name}}ActionTypes, {{sentenceCase name}} } from './types';

export const fetchRequest = () => action({{sentenceCase name}}ActionTypes.FETCH_REQUEST);

export const fetchSuccess = (data: {{sentenceCase name}}[]) => action({{sentenceCase name}}ActionTypes.FETCH_SUCCESS, data);
export const fetchError = (message: string) => action({{sentenceCase name}}ActionTypes.FETCH_ERROR, message);