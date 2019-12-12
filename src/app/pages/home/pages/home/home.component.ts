import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { checkProgramExist } from 'src/app/store/actions';
import { State } from 'src/app/store/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  alldata;
  programFound: Observable<String>;

  constructor(
    private httpClient: NgxDhis2HttpClientService,
    private store: Store<State>
  ) {
    this.alldata = this.store.select(state => state.program.programName);
    this.programFound = this.store.select(state => state.program.programFound);
    store.dispatch(checkProgramExist({ programName: this.alldata }));
  }

  ngOnInit() {
    console.log(this.alldata);
  }
}