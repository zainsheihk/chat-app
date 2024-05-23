import React from "react";
import ChatHeader from "./chatHeader";
import MessageBox from "./messageBox";
import ChatContainer from "./chatContainer";
import EmptyChat from "./emptyChat";
import { useStateProvider } from "@/context/stateContext";

function Chat() {
  const [{ currentChatUser }] = useStateProvider();

  return (
    <>
      {!currentChatUser ? (
        <EmptyChat />
      ) : (
        <ChatContainer>
          <ChatHeader />
          <MessageBox />
        </ChatContainer>
      )}
    </>
  );
}

export default Chat;
