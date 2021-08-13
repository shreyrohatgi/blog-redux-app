import { Dispatch } from "redux";
import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

export const fetchPosts = () => async (dispatch: Dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id: number) => (dispatch: Dispatch) => {
  _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id: number, dispatch: Dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
});
