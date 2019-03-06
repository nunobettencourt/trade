export interface HierNodes {}

  export type ApiResponse = Record<string, any>

  export enum hierNodesActionTypes {
    FETCH_REQUEST = '@@hiernodes/FETCH_REQUEST',
    FETCH_SUCCESS = '@@hiernodes/FETCH_SUCCESS',
    FETCH_ERROR = '@@hiernodes/FETCH_ERROR',
    SELECTED = '@@hiernodes/SELECTED'
  }

  export interface HierNodesState {
    readonly loading: boolean
    readonly data: HierNodes
    readonly errors?: string
  }