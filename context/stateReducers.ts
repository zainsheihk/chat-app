"use client";

import { REDUCER_CASES } from "@/utils/constant";

export const initialState = {
  userInfo: undefined,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case REDUCER_CASES.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo,
      };

    default:
      return state;
  }
};

export default reducer;
