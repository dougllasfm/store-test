/* eslint-disable import/no-anonymous-default-export */
import { RECEIVE_API_DATA } from "../actions/actions";

export default (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_API_DATA:
      return data;
    default:
      return state;
  }
};