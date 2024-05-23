"use client";

import { REDUCER_CASES } from "@/utils/constant";

export const initialState = {
  userInfo: undefined,
  currentChatUser: undefined,
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
    case REDUCER_CASES.SET_CURRENT_CHAT_USER:
      return {
        ...state,
        currentChatUser: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
