import React, { ReactNode } from "react";

function ChatContainer({ children }: { children: ReactNode[] }) {
  return (
    <div className="bg-chat-bg w-[70%] bg-[length:450px_330px] flex flex-col justify-between bg-opacity-5">
      {children}
    </div>
  );
}

export default ChatContainer;
