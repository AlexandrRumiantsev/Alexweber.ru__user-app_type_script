import {Reducer} from 'redux'

const defaultState = {
  'page' : []
} as MainState

export const reducer: Reducer<MainState> = (state = defaultState, action) => {
  const {type, payload} = action
  switch (type) {
    case ActionTypes.GET_MAIN:
      return {
        ...state,
        page: payload
      }
    default:
      return state
  }
}

enum ActionTypes {
   GET_MAIN = 'GetMain'
}

export function getProjectInfo(mainInfo) {
  return {
    type:    ActionTypes.GET_MAIN,
    payload: mainInfo
  }
}

export interface MainState {
  mainInfo: any
}