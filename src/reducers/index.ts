import { combineReducers } from "redux";
import postReducer from "./postReducer";
import usersReducer from "./usersReducer";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Geo {
  lat: string;
  lng: string;
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

export interface IState {
  posts: IPost;
  users: IPost;
}

export default combineReducers({
  posts: postReducer,
  users: usersReducer,
});
