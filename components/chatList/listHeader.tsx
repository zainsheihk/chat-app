import { useStateProvider } from "@/context/stateContext";
import { Avatar } from "@/libraries/material-tailwind";
import { REDUCER_CASES } from "@/utils/constant";
import { Icon } from "@iconify/react";

import React from "react";

function ListHeader() {
  const [{ userInfo }, dispatch] = useStateProvider();

  return (
    <div className="bg-primary px-5 py-[15px] flex justify-between items-center ">
      <Avatar
        size="sm"
        src={userInfo?.profileImage ?? ""}
        alt="avatar"
        placeholder={""}
        onPointerEnterCapture={""}
        onPointerLeaveCapture={""}
      />
      <div className="flex justify-center items-center gap-2">
        <Icon
          onClick={() => {
            dispatch({ type: REDUCER_CASES.SET_CONTACT_DRAWER, isOpen: true });
          }}
          icon="material-symbols-light:chat"
          className="text-[28px] text-[#fff] cursor-pointer"
        />
        <Icon
          icon="pepicons-pop:dots-y"
          className="text-[26px] text-[#fff] cursor-pointer"
        />
      </div>
    </div>
  );
}

export default ListHeader;
