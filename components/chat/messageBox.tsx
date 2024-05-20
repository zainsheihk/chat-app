import { Input } from "@/libraries/material-tailwind";
import React from "react";
import { Icon } from "@iconify-icon/react";

function MessageBox() {
  return (
    <div className="bg-white">
      <div className="px-5 py-3 pb-4 flex justify-center items-center gap-3 bg-[#ccc9]">
        <div className="flex items-center justify-center gap-2">
          <Icon
            icon="fluent:emoji-24-regular"
            className="text-[30px] text-[#607d8b]"
          />

          <Icon
            icon="material-symbols:attachment"
            className="text-[30px] text-[#607d8b]"
          />
        </div>
        <Input
          placeholder="Type a Message"
          containerProps={{
            className:
              "[&_input]:border-none [&_input]:px-5 [&_input]:py-3 h-auto  [&_input]:bg-white [&_input]:rounded-full ",
          }}
          labelProps={{
            className: "hidden",
          }}
        />
        <Icon
          icon="material-symbols:send"
          className="text-[36px] text-[#607d8b]"
        />
      </div>
    </div>
  );
}

export default MessageBox;
