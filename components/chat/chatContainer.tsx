import React, { ReactNode } from "react";

function ChatContainer({ children }: { children: ReactNode[] }) {
  return (
    <div className=" w-[70%] flex flex-col justify-between bg-opacity-5">
      {children}
    </div>
  );
}

export default ChatContainer;
