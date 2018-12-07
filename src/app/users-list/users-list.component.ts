import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as userActions from '../users-list/store/user.actions';
import * as fromUserReducer from './store/user.reducers';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  /*   userList = null;
    selectedUser = null; */
  userList$: Observable<any>;
  selectedUser: {};


  constructor(
    private userService: UsersService,
    private store: Store<any>
  ) { }

  ngOnInit() {

    /* this.userService.getAllUsers()
      .subscribe(
        data => {
          this.userList = data;
        }
      ); */



    this.userList$ = this.userService.getAllUsers();

    // !Using Effects
   /*  this.store.dispatch(new userActions.LoadAction());

    this.userList$ = this.store.pipe(
      select('userSlice')
    ); */


  }

  /*  onClickOfUser(user) {
     this.selectedUser = user;
   } */
  onClickOfUser(user) {
    console.log(user);
    this.selectedUser = user;
  }



}
