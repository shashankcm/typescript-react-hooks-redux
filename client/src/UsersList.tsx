import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Dispatch, AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { IAppState } from "./store/RootReducer";

import { IUser } from "./store/user/UserTypes";

const CenterContent = styled.div`
  text-align: center;
`;

interface IUserListOwnProps {}

interface IUserListStateToProps {
  user: IUser;
}

const UsersList: React.FC<IUserListOwnProps> = (): JSX.Element => {
  return (
    <CenterContent>
      <p>UserList</p>
      <Link to="/">Home</Link>
    </CenterContent>
  );
};
const mapStateToProps: MapStateToProps<
  IUserListStateToProps,
  IUserListOwnProps,
  IAppState
> = (state: IAppState, ownProps: IUserListOwnProps): IUserListStateToProps => ({
  user: state.user,
  ...ownProps
});

export default connect(
  mapStateToProps,
  null
)(UsersList);
