import {Reducer} from 'redux'

const defaultState = {
  'list' : []
} as ProjectsState

export const reducer: Reducer<ProjectsState> = (state = defaultState, action) => {
  const {type, payload} = action
  console.log(type);
  switch (type) {
    case ActionTypes.GET_PROJECT_INFO:
      return {
        ...state,
        list: payload
      }
    default:
      return state
  }
}

enum ActionTypes {
   GET_PROJECT_INFO = 'GetProjects'
}

export function getProjectInfo(projectInfo) {
  return {
    type:    ActionTypes.GET_PROJECT_INFO,
    payload: projectInfo
  }
}

export interface ProjectsState {
  projectInfo: any
}