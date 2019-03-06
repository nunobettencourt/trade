export interface User {}

  export type ApiResponse = Record<string, any>

  export enum userActionTypes {
    FETCH_REQUEST = '@@user/FETCH_REQUEST',
    FETCH_SUCCESS = '@@user/FETCH_SUCCESS',
    FETCH_ERROR = '@@user/FETCH_ERROR',
    SELECTED = '@@user/SELECTED'
  }

  export interface UserState {
    readonly loading: boolean
    readonly data: User
    readonly errors?: string
  }