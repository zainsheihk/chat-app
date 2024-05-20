import React, { useEffect, useState } from "react";
import ContactHeader from "./contactHeader";
import ContactSearch from "./contactSearch";
import apiService from "@/service";
import { useStateProvider } from "@/context/stateContext";
import ContactItem from "./contactItem";

function Contact() {
  const [contacts, setContacts] = useState([]);
  const [{ isContactDrawerOpen }] = useStateProvider();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isContactDrawerOpen && isMounted) {
      getAllUserExceptCurrent();
    }
  }, [isContactDrawerOpen, isMounted]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getAllUserExceptCurrent = async () => {
    const {
      data: { data },
    } = await apiService.get("/api/user/get-all-user");

    const sortedUser = data.sort((a: any, b: any) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return nameA < nameB ? -1 : 1;
    });

    const groupedUser = sortedUser.reduce((acc: any, cur: any) => {
      const l = cur.name[0];
      if (acc.filter((e: any) => e.letter === l)[0] === undefined) {
        acc.push({ letter: l.toLowerCase(), contact: [] });
      }
      acc.filter((e: any) => e.letter == l)[0].contact.push({ ...cur });
      return acc;
    }, []);

    setContacts(groupedUser);
  };
  return (
    <div className="w-[30%] bg-[#ccc6] h-screen">
      <ContactHeader />
      <ContactSearch />
      <div className=" py-3">
        {contacts.map((item: any, key: number) => (
          <div key={key} className="mb-1 ">
            <p className="font-body capitalize text-[18px] font-semibold mx-6">
              {item.letter}
            </p>
            {item?.contact?.map((contact: any, key: number) => (
              <ContactItem key={key} contact={contact} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
