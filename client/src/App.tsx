import React, { useState, ChangeEvent, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import {
  saveUsername as saveUsernameAction,
  saveUserMessage as saveUserMessageAction
} from "./store/user/UserActions";
import { IUser } from "./store/user/UserTypes";
import { IAppState } from "./store/RootReducer";

interface IAppOwnProps {
  username: string | undefined;
  userType: "adim" | "moderator" | "user" | "guest";
}

interface IAppDispatchToProps {
  saveUsername: (user: IUser) => void;
  saveUserMessage: (user: IUser) => void;
}

const App: React.FC<IAppOwnProps> = ({ username, userType }): JSX.Element => {
  const [time, setTime] = useState<Date>(() => new Date(Date.now()));
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const timmer = setInterval(() => {
      setTime(new Date(Date.now()));
    }, 1000);
    return () => {
      clearInterval(timmer);
    };
  }, [username]);

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setMessage(event.target.value);
  };
  return (
    <div className="App">
      <p>
        Hi, {username ? username : "Mysterious Entity"}, your user type is{" "}
        {username ? userType : "irrelevant because I do not know you"}.
      </p>
      <p>{time.toUTCString()}</p>
      <input
        type="text"
        placeholder="Enter your message here"
        value={message}
        onChange={handleTextChange}
      />
      <p>Your message: {message || ""}</p>
      <Link to="/userList">User List</Link>
    </div>
  );
};

const mapDispatchToProps: MapDispatchToProps<
  IAppDispatchToProps,
  IAppOwnProps
> = (dispatch: Dispatch, ownProps: IAppOwnProps): IAppDispatchToProps => ({
  saveUsername: (user: IUser) => {
    dispatch(saveUsernameAction(user));
  },

  saveUserMessage: (user: IUser) => {
    dispatch(saveUserMessageAction(user));
  }
});

export default App;
