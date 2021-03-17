import {Reducer} from 'redux'

const defaultState = {
  'list' : [],
  'item' : null
} as PapersState

export const reducer: Reducer<PapersState> = (state = defaultState, action) => {
  const {type, payload} = action;
 
  switch (type) {
    case ActionTypes.GET_PAPERS:
      return {
        ...state,
        list: payload
      }
    case ActionTypes.GET_PAPER:
      return {
        ...state,
        item: payload
      } 
    default:
      return state
  }
}

enum ActionTypes {
   GET_PAPERS = 'GetPapers',
   GET_PAPER = 'GetPaper'
}

export function getProjectInfo(projectInfo) {
  return {
    type:    ActionTypes.GET_PAPERS,
    payload: projectInfo
  }
}

export interface PapersState {
  list: any,
  item: any
}