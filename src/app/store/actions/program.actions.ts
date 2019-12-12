import { createAction, props } from '@ngrx/store';


export enum ProgramActionTypes {
  FetchProgramName = '[Program] Fetch Program Name',
  CheckProgramExist = '[Program] Check Program Exist',
  LoadCategoryDefaultValues = '[Program] Load Category Default Values',
  ChangeDefaultValues = '[Program] Change Default Values',
  UploadData = '[Program] Upload Data'
}


export const fetchProgramName = createAction('[Program] Fetch Program Name');

export const checkProgramExist = createAction(
         '[Program] check Program Exist',
         props<{ programName: string }>()
       );


 export const programNameFound = createAction(
          '[Program] program Name Found',
          props<{ programs: any }>()
        );     
 export const checkProgramExistFailed = createAction(
   '[User] check Program Exist Failed',
   props<{ error: string }>()
 );

       



export const loadCategoryDefaultValues = createAction(
         '[Program] load Category Default Values'
       );

export const changeDefaultValues = createAction(
         '[Program] change Default Values',
         props<{ defaultValues }>()
       );


