import { UserType } from "@/utils/validation.schema";
import { Avatar } from "@/libraries/material-tailwind";
import React from "react";

function ContactItem({ contact }: { contact: UserType }) {
  const { profileImage, name, about } = contact;

  return (
    <div className="px-9 py-3 flex gap-3 items-center mb-2 border-b cursor-pointer hover:bg-gray-300  transition-all ">
      <Avatar
        src={profileImage}
        placeholder={""}
        onPointerEnterCapture={""}
        onPointerLeaveCapture={""}
      />
      <div>
        <p className="font-body capitalize">{name}</p>
        <p className="font-body capitalize text-[12px] text-[#8e8d8d]">
          {about}
        </p>
      </div>
    </div>
  );
}

export default ContactItem;
