import {combineReducers} from 'redux'
import {reducer as projects, ProjectsState} from './projects'
import {reducer as main, MainState} from './main'
import {reducer as papers, PapersState} from './papers'

export const rootReducer = combineReducers<RootState>({
  projects,
  main,
  papers
})

export interface RootState {
    projects: ProjectsState,
    main: MainState,
    papers: PapersState
}

export type RootType = ReturnType<typeof rootReducer>
