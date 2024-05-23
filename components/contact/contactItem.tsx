import { UserType } from "@/utils/validation.schema";
import { Avatar } from "@/libraries/material-tailwind";
import React from "react";
import { useStateProvider } from "@/context/stateContext";
import { REDUCER_CASES } from "@/utils/constant";

function ContactItem({
  contact,
  onContact,
}: {
  contact: UserType;
  onContact: (contact: UserType) => void;
}) {
  const [{ currentChatUser }, dispatch] = useStateProvider();

  const { profileImage, name, about, id } = contact;

  return (
    <div
      onClick={() => {
        onContact(contact);
        dispatch({ type: REDUCER_CASES.SET_CONTACT_DRAWER, isOpen: false });
      }}
      className={`px-9 py-3 flex gap-3 items-center mb-2 border-b cursor-pointer hover:bg-gray-300  transition-all ${
        id === currentChatUser?.id ? "bg-gray-300" : ""
      }`}
    >
      <Avatar
        src={profileImage}
        placeholder={""}
        onPointerEnterCapture={""}
        onPointerLeaveCapture={""}
      />
      <div className="border-b border-[#ccc] w-full pb-2">
        <p className="font-body capitalize">{name}</p>
        <p className="font-body capitalize text-[12px] text-[#8e8d8d]">
          {about}
        </p>
      </div>
    </div>
  );
}

export default ContactItem;
