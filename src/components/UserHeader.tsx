import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
import { IUser } from "../reducers";

interface IProps {
  userId: number;
  user?: IUser;
}

interface IFetch {
  fetchUser: Function;
}

interface IState {
  users: [IUser];
}

const UserHeader: React.FC<IProps & IFetch> = (props) => {
  const { user } = props;
  useEffect(() => {
    props?.fetchUser(props.userId);
  }, []);

  if (!user) {
    return null;
  }
  return <div className='header'>{user.name}</div>;
};

const mapStateToProps = (state: IState, ownProps: IProps) => {
  return {
    user: state.users.find((user: IUser) => user.id === ownProps.userId),
  };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
