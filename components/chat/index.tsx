import React from "react";
import ChatHeader from "./chatHeader";
import MessageBox from "./messageBox";
import ChatContainer from "./chatContainer";
import EmptyChat from "./emptyChat";

function Chat() {
  return (
    <EmptyChat />
    // <ChatContainer>
    //   <ChatHeader />
    //   <MessageBox />
    // </ChatContainer>
  );
}

export default Chat;
