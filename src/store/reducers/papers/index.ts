import {Reducer} from 'redux'

const defaultState = {
  'list' : []
} as PapersState

export const reducer: Reducer<ProjectsState> = (state = defaultState, action) => {
  const {type, payload} = action
  console.log(type);
  switch (type) {
    case ActionTypes.GET_PAPERS:
      return {
        ...state,
        list: payload
      }
    default:
      return state
  }
}

enum ActionTypes {
   GET_PAPERS = 'GetPapers'
}

export function getProjectInfo(projectInfo) {
  return {
    type:    ActionTypes.GET_PAPERS,
    payload: projectInfo
  }
}

export interface ProjectsState {
  projectInfo: any
}