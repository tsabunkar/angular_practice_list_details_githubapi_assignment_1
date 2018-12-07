import * as userActions from './user.actions';


export interface UserState {
    listOfUsers: [];
    error: string;
}

const initialState: UserState = {
    listOfUsers: [],
    error: ''
};

export function userReducer(state = initialState, action: userActions.UsersActions): UserState {

    switch (action.type) { // checking the type prooperty from action object

        case userActions.UserActionTypes.LOAD_SUCCESS:
            console.log('case load success');
            return {
                ...state,
                listOfUsers: action.payload,
                error: ''
            };

        case userActions.UserActionTypes.LOAD_FAIL:
            console.log('case load fail');
            return {
                ...state,
                listOfUsers: [],
                error: action.payload
            };

        default: {
            console.log('default state');
            return state;
        }
    }
}
