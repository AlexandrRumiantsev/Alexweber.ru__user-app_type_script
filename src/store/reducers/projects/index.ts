import {Reducer} from 'redux'

const defaultState = {
  'list' : [],
  'item' : null
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
    case ActionTypes.GET_PROJECT:
      console.log(payload);
      return {
        ...state,
        item: payload
      }
    default:
      return state
  }
}

enum ActionTypes {
   GET_PROJECT_INFO = 'GetProjects',
   GET_PROJECT = 'GetProject'
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