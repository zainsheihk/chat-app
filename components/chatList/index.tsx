import React from "react";
import ListHeader from "./listHeader";
import ChatSearch from "./chatSearch";

function ChatList() {
  return (
    <div className="bg-[#ccc6] h-screen w-[30%]">
      <ListHeader />
      <ChatSearch />
    </div>
  );
}

export default ChatList;
