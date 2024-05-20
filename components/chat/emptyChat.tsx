import Image from "next/image";
import React from "react";
import logo from "@/public/chat.jpg";

function EmptyChat() {
  return (
    <div className=" flex justify-center items-center flex-col w-[70%]">
      <Image src={logo} alt="" className="w-[35%] mb-4" />
      <h3 className="font-body text-[36px] mb-2">Welcome to ChatMate!</h3>
      <p className="font-body text-[14px] w-[60%] text-center">
        Connect and chat with friends, family, and new people around the world.
        Lets make meaningful connections!
      </p>
    </div>
  );
}

export default EmptyChat;
