"use client";

import { REDUCER_CASES } from "@/utils/constant";

export const initialState = {
  userInfo: undefined,
  newUser: false,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case REDUCER_CASES.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case REDUCER_CASES.SET_NEW_USER:
      return {
        ...state,
        newUser: action.newUser,
      };
    default:
      return state;
  }
};

export default reducer;
