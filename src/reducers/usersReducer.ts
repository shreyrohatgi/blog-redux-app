import { IUser } from "./index";

interface IAction {
  type: string;
  payload: IUser;
}

export default (state = [], action: IAction) => {
  switch (action.type) {
    case "FETCH_USER":
      return [...state, action.payload];
    default:
      return state;
  }
};
