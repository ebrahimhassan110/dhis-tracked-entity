import { createSelector } from '@ngrx/store';
import { getRootState, State } from '../reducers';
import { UserState } from '../states/user.state';
import { User } from '@iapps/ngx-dhis2-http-client';






export const getProgramState = createSelector(
  getRootState,
  (state: State) => state
);

