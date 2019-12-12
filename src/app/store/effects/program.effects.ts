import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService, User } from '@iapps/ngx-dhis2-http-client';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  checkProgramExist,
  programNameFound,
  checkProgramExistFailed
} from '../actions';


@Injectable()
export class ProgramEffects implements OnInitEffects {
  loadCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(checkProgramExist),
      switchMap((action) =>
        this.httpClient.get(`programs.json?query=tb`).pipe(
          map(programs =>  programNameFound({programs})  ),

          catchError((error: any) => of(checkProgramExistFailed({ error })))
        )
      )
    )
  );

  ngrxOnInitEffects() {
    return checkProgramExist({ programName: 'tb' });
  }

  constructor(
    private actions$: Actions,
    private httpClient: NgxDhis2HttpClientService
  ) {}
}
