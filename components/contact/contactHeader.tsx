import { useStateProvider } from "@/context/stateContext";
import { REDUCER_CASES } from "@/utils/constant";
import { Icon } from "@iconify/react";
import React from "react";

function ContactHeader() {
  const [{}, dispatch] = useStateProvider();

  return (
    <div className="bg-primary px-5 py-[15px] flex justify-between items-center ">
      <Icon
        onClick={() => {
          dispatch({ type: REDUCER_CASES.SET_CONTACT_DRAWER, isOpen: false });
        }}
        icon="material-symbols-light:arrow-back"
        className="text-[36px] text-[#fff] cursor-pointer"
      />
      <p className="font-body text-[#fff] text-center w-full">New Chat</p>
    </div>
  );
}

export default ContactHeader;
