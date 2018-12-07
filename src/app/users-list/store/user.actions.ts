import { Action } from '@ngrx/store';

export enum UserActionTypes {
    LOAD = '[User] GetAll list of users',
    LOAD_SUCCESS = '[User] list of users fetched successfully',
    LOAD_FAIL = '[User] list of users failed to fetched',
}


export class LoadAction implements Action {
    readonly type = UserActionTypes.LOAD;
}
export class LoadSuccessAction implements Action {
    readonly type = UserActionTypes.LOAD_SUCCESS;

    constructor(public payload: []) { }
}
export class LoadFailAction implements Action {
    readonly type = UserActionTypes.LOAD_FAIL;

    constructor(public payload: string) { }
}

export type UsersActions = LoadAction
    | LoadSuccessAction
    | LoadFailAction;
