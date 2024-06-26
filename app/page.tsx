"use client";
import Chat from "@/components/chat";
import ChatList from "@/components/chatList";
import Contact from "@/components/contact";
import { useStateProvider } from "@/context/stateContext";
import apiService from "@/service";
import { REDUCER_CASES } from "@/utils/constant";
import React, { useEffect, useState } from "react";

function Page() {
  const [{ userInfo, isContactDrawerOpen }, dispatch] = useStateProvider();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    if (isMounted && !userInfo) {
      loggedInUser();
    }
  }, [isMounted]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const loggedInUser = async () => {
    const { data } = await apiService.get("/api/user/get-user");
    if (data?.status) {
      dispatch({
        type: REDUCER_CASES.SET_USER_INFO,
        userInfo: { ...data.data },
      });
    }
  };

  return (
    <div className="flex">
      {isContactDrawerOpen ? <Contact /> : <ChatList />}

      <Chat />
    </div>
  );
}

export default Page;
