import { createReducer, on } from '@ngrx/store';

import {
  fetchProgramName,
  checkProgramExist,
  loadCategoryDefaultValues,
  changeDefaultValues,
  programNameFound
} from '../actions/program.actions';
import { initialProgramState, ProgramState } from '../states/program.state';
import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState
} from '../states/base.state';

export const reducer = createReducer(
         initialProgramState,
         on(fetchProgramName, state => ({
           ...state
         })),

         on(checkProgramExist, (state, { programName }) => ({
           ...state
         })),

         on(programNameFound, (state, { programs }) => ({
           ...state,programFound:programs
         })),

         on(changeDefaultValues, (state, { defaultValues }) => ({
           ...state,
           ...loadedBaseState,
           defaultValues
         }))
       );

export function programReducer(state, action): ProgramState {
         return reducer(state, action);
       }
