import React from "react";

import {
  Dialog,
  DialogHeader,
  DialogBody,
} from "@/libraries/material-tailwind";
import { JOESCH_CHARACTERS } from "@/utils/constant";

function LibraryPhoto({
  isOpen,
  onLibraryPhoto,
  onHandler,
}: {
  isOpen: boolean;
  onLibraryPhoto: (value: any) => void;
  onHandler: (value: any) => void;
}) {
  return (
    <Dialog size="sm" open={isOpen} handler={onHandler}>
      <DialogHeader>Select an image to add to profile.</DialogHeader>
      <DialogBody>
        <div className="grid grid-cols-3 gap-y-4 items-center	">
          {JOESCH_CHARACTERS.map((item, key) => (
            <div
              key={key}
              className="w-28 h-28 bg-[#ccc] mx-auto rounded-full overflow-hidden cursor-pointer"
              onClick={() =>
                onLibraryPhoto(`https://joesch.moe/api/v1/${item}`)
              }
            >
              <img
                className="block w-full  h-full object-cover"
                src={`https://joesch.moe/api/v1/${item}`}
                alt="avatar"
              />
            </div>
          ))}
        </div>
      </DialogBody>
    </Dialog>
  );
}

export default LibraryPhoto;
