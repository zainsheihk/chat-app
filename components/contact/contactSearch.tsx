import { Input } from "@material-tailwind/react";
import React from "react";
import { Icon } from "@iconify/react";

function ContactSearch() {
  return (
    <div className="px-5 py-3 flex justify-center items-center gap-3">
      <Input
        placeholder="Search"
        icon={
          <Icon
            icon="iconamoon:search-thin"
            className="text-[28px]  -right-1 absolute"
          />
        }
        containerProps={{
          className:
            "[&_input]:border-none [&_input]:px-5 [&_input]:py-3 h-auto  [&_input]:bg-white [&_input]:rounded-full ",
        }}
        labelProps={{
          className: "hidden",
        }}
      />
    </div>
  );
}

export default ContactSearch;
