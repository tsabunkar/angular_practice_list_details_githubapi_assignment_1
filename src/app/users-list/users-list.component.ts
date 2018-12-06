import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  /*   userList = null;
    selectedUser = null; */
  userList$: Observable<{}>;
  selectedUser: {};


  constructor(
    private userService: UsersService
  ) { }

  ngOnInit() {

    /* this.userService.getAllUsers()
      .subscribe(
        data => {
          this.userList = data;
        }
      ); */
    this.userList$ = this.userService.getAllUsers();


  }

  /*  onClickOfUser(user) {
     this.selectedUser = user;
   } */
  onClickOfUser(user) {
    console.log(user);
    this.selectedUser = user;
  }



}
