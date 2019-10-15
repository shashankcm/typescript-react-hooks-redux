import { IUser, UserActions, IUserActionTypes } from "./UserTypes";

const InitialState: IUser = {
  username: undefined,
  userMessage: undefined
};

export function userReducer(
  state: IUser = InitialState,
  action: IUserActionTypes
) {
  switch (action.type) {
    case UserActions.SAVE_USERNAME:
      return {
        ...state,
        username: action.payload.username
      };
    case UserActions.SAVE_USER_MESSAGE:
      return {
        ...state,
        userMessage: action.payload.userMessage
      };

    default:
      return state;
  }
}
