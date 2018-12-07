import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as userActions from './user.actions';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { UsersService } from '../users.service';

@Injectable()
export class ProductEffects {

    constructor(private actions$: Actions,
        private userService: UsersService
    ) { }

    // !Effect for GetAll product
    @Effect()
    loadProducts$: Observable<Action> = this.actions$.pipe(
        ofType(userActions.UserActionTypes.LOAD),
        mergeMap((itemAction: userActions.LoadAction) => this.userService.getAllUsers()
            .pipe(
                map((usersArray: []) => new userActions.LoadSuccessAction(usersArray)),
                catchError(err => of(new userActions.LoadFailAction(err))) // exception handling in effects
            )
        )
    );

}

