import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './users-list/user-details/user-details.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './users-list/store/user.reducers';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ userSlice: userReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
