export interface IUser {
  username: string | undefined;
  userMessage: string | undefined;
}

export const UserActions = {
  SAVE_USERNAME: "SAVE_USERNAME",
  SAVE_USER_MESSAGE: "SAVE_USER_MESSAGE"
};

interface ISaveUserNameAction {
  type: typeof UserActions.SAVE_USERNAME;
  payload: IUser;
}

interface ISaveUserMessageAction {
  type: typeof UserActions.SAVE_USER_MESSAGE;
  payload: IUser;
}

export type IUserActionTypes = ISaveUserNameAction | ISaveUserMessageAction;
