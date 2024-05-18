import { useStateProvider } from "@/context/stateContext";
import { Avatar } from "@/libraries/material-tailwind";
import { Icon } from "@iconify/react";

import React from "react";

function ListHeader() {
  const [{ userInfo }] = useStateProvider();

  return (
    <div className="bg-[#0b0854] px-5 py-3 flex justify-between items-center ">
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
          icon="material-symbols-light:chat"
          className="text-[28px] text-[#fff]"
        />
        <Icon icon="pepicons-pop:dots-y" className="text-[26px] text-[#fff]" />
      </div>
    </div>
  );
}

export default ListHeader;
