"use client";

import { REDUCER_CASES } from "@/utils/constant";

export const initialState = {
  userInfo: undefined,
  isContactDrawerOpen: false,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case REDUCER_CASES.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case REDUCER_CASES.SET_CONTACT_DRAWER:
      return {
        ...state,
        isContactDrawerOpen: action.isOpen,
      };

    default:
      return state;
  }
};

export default reducer;
