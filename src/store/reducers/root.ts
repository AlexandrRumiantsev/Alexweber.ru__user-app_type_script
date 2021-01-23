import {combineReducers} from 'redux'
import {reducer as projects, ProjectsState} from './projects'

export const rootReducer = combineReducers<RootState>({
  projects
})

export interface RootState {
    projects: ProjectsState
}

export type RootType = ReturnType<typeof rootReducer>
