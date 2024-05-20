import { Avatar, Typography } from "@/libraries/material-tailwind";
import { Icon } from "@iconify-icon/react";
import React from "react";

function ChatHeader() {
  return (
    <div className="bg-primary px-5 py-3 flex justify-between items-center  ">
      <div className="flex items-center gap-4">
        <Avatar
          size="sm"
          src={
            "https://lh3.googleusercontent.com/a/ACg8ocLlTUcRA39d3zF0hgdxVwwjYXsCcuafTzXhqopPp3UEiHU5kQgr=s96-c"
          }
          alt="avatar"
          placeholder={""}
          onPointerEnterCapture={""}
          onPointerLeaveCapture={""}
        />
        <div>
          <Typography variant="h6" className="text-[16px] text-[#FFF]">
            Tania Andrew
          </Typography>
          <Typography variant="small" className="text-[12px] text-[#FFF]">
            Online / Offline
          </Typography>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <Icon
          icon="material-symbols:call"
          className="text-[28px] text-[#fff]"
        />
        <Icon icon="mdi:video" className="text-[28px] text-[#fff]" />
        <Icon icon="iconamoon:search" className="text-[28px] text-[#fff]" />
        <Icon icon="pepicons-pop:dots-y" className="text-[26px] text-[#fff]" />
      </div>
    </div>
  );
}

export default ChatHeader;
