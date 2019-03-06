export interface {{lowerCase name}} {}

  export type ApiResponse = Record<string, any>

  export enum {{lowerCase name}}ActionTypes {
    FETCH_REQUEST = '@@{{lowerCase name}}/FETCH_REQUEST',
    FETCH_SUCCESS = '@@{{lowerCase name}}/FETCH_SUCCESS',
    FETCH_ERROR = '@@{{lowerCase name}}/FETCH_ERROR',
    SELECTED = '@@{{lowerCase name}}/SELECTED'
  }

  export interface {{lowerCase name}}State {
    readonly loading: boolean
    readonly data: {{lowerCase name}}
    readonly errors?: string
  }