import { SET_DATA } from "./constant";

export const APIData = (data = [], action) => {
  switch (action.type) {
    case SET_DATA:
      return [...action.data];
    default:
      return data;
  }
};
