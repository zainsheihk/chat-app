"use client";
import { useStateProvider } from "@/context/stateContext";
import apiService from "@/service";
import { REDUCER_CASES } from "@/utils/constant";
import React, { useEffect, useState } from "react";

function Page() {
  const [{ userInfo }, dispatch] = useStateProvider();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isMounted && !userInfo) {
      LoggedInUser();
    }
  }, [isMounted]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const LoggedInUser = async () => {
    const { data } = await apiService.get("/api/auth/get-user");
    if (data?.status) {
      dispatch({
        type: REDUCER_CASES.SET_USER_INFO,
        userInfo: { ...data.data },
      });
    }
  };

  return <div>Page{JSON.stringify(userInfo)}</div>;
}

export default Page;
