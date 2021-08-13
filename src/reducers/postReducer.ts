import { IPost } from "./index";

interface IAction {
  type: string;
  payload: IPost;
}

export default (state = [], action: IAction) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
