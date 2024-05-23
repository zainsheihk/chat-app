import React, { useEffect, useState } from "react";
import ContactHeader from "./contactHeader";
import ContactSearch from "./contactSearch";
import apiService from "@/service";
import { useStateProvider } from "@/context/stateContext";
import ContactItem from "./contactItem";
import useDebounce from "@/hooks/useDebounce";
import { UserType } from "@/utils/validation.schema";
import { REDUCER_CASES } from "@/utils/constant";

function Contact() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [{ isContactDrawerOpen }, dispatch] = useStateProvider();
  const [isMounted, setIsMounted] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filteredContact, setFilteredContact] = useState<any[]>([]);
  const delayValue = useDebounce<string>(searchValue, 500);

  useEffect(() => {
    if (isContactDrawerOpen && isMounted) {
      getAllUserExceptCurrent();
    }
  }, [isContactDrawerOpen, isMounted]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const filterContact = contacts
      .map((item: any) => {
        const newContact = item.contact.filter((ele: any) =>
          ele.name.toLowerCase().includes(delayValue.toLowerCase())
        );
        return newContact.length ? { ...item, contact: newContact } : null;
      })
      .filter(Boolean);

    setFilteredContact(filterContact);
  }, [delayValue]);

  const getAllUserExceptCurrent = async () => {
    const {
      data: { data },
    } = await apiService.get("/api/user/get-all-user");

    const sortedUser = data.sort((a: any, b: any) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );

    const groupedUser = sortedUser.reduce((acc: any, cur: any) => {
      const letter = cur.name[0].toLowerCase();
      if (!acc.has(letter)) {
        acc.set(letter, { letter, contact: [] });
      }
      acc.get(letter).contact.push(cur);
      return acc;
    }, new Map());

    const result = Array.from(groupedUser.values());

    setContacts(result);
    setFilteredContact(result);
  };
  const handleSearchInput = (value: string) => {
    setSearchValue(value);
  };

  const handleContact = (item: UserType) => {
    dispatch({ type: REDUCER_CASES.SET_CURRENT_CHAT_USER, user: item });
  };

  return (
    <div className="w-[30%] bg-[#ccc6] min-h-screen">
      <ContactHeader />
      <ContactSearch onSearch={handleSearchInput} />
      <div className=" py-3">
        {filteredContact.map((item: any, key: number) => (
          <div key={key} className="mb-1">
            <p className="font-body capitalize text-[18px] font-semibold mx-6">
              {item.letter}
            </p>
            {item?.contact?.map((contact: any, key: number) => (
              <ContactItem
                key={key}
                contact={contact}
                onContact={handleContact}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
