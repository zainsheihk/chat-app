import React, { useRef, useState } from "react";
import profile from "@/public/profile.png";
import Image from "next/image";
import { Icon } from "@iconify-icon/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@/libraries/material-tailwind";

import { useFormContext, useWatch } from "react-hook-form";
import { JOESCH_CHARACTERS } from "@/utils/constant";

function Avatar() {
  const { setValue, getValues } = useFormContext();
  const value = useWatch({ name: "displayImage" });

  const fileRef = useRef<HTMLInputElement>(null);
  const [photoLibraryIsOpen, setPhotoLibraryIsOpen] = useState(false);

  const handleUploadPhoto = () => {
    fileRef.current?.click();
  };

  const handleChangePhoto = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
      return;
    }
    const file = input.files[0];
  };
  const handleLibrary = (url: string) => {
    setValue("displayImage", url);
    setPhotoLibraryIsOpen(!photoLibraryIsOpen);
  };
  const handleRemovePhoto = () => {
    setValue("displayImage", "", {});
  };
  const displayImage = getValues("displayImage");
  return (
    <>
      <Menu
        placement="top-start"
        offset={{ mainAxis: -250, crossAxis: 80 }}
        {...value}
      >
        <MenuHandler>
          <div className="flex justify-center mb-5 relative w-fit mx-auto  bg-[#ccc] [&_div]:hover:visible cursor-pointer overflow-hidden rounded-full">
            {displayImage ? (
              <img
                src={displayImage}
                alt=""
                className="brightness-[1.5] w-[140px] h-[140px]"
              />
            ) : (
              <Image
                src={profile}
                alt=""
                className="brightness-[1.5] w-[140px] h-[140px]"
              />
            )}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-60 w-[98%] h-[98%] 
          rounded-full flex justify-center items-center flex-col invisible transition-all"
            >
              <Icon
                icon="ph:camera-light"
                className="text-[30px] text-[#fff]"
              />
              <p className="font-body text-[12px] text-[#fff]">Change photo</p>
            </div>
            <label htmlFor="displayImage" className="hidden">
              displayImage
            </label>
            <input
              onChange={handleChangePhoto}
              ref={fileRef}
              id="displayImage"
              type="file"
              name="displayImage"
              className="hidden"
              placeholder=""
            />
          </div>
        </MenuHandler>

        <MenuList>
          <MenuItem>Take Photo</MenuItem>
          <MenuItem onClick={() => setPhotoLibraryIsOpen(!photoLibraryIsOpen)}>
            Choose From Library
          </MenuItem>
          <MenuItem onClick={handleUploadPhoto}>Upload Photo</MenuItem>
          <MenuItem onClick={handleRemovePhoto}>Remove Photo</MenuItem>
        </MenuList>
      </Menu>
      <Dialog
        size="sm"
        open={photoLibraryIsOpen}
        handler={() => setPhotoLibraryIsOpen(!photoLibraryIsOpen)}
      >
        <DialogHeader>Select an image to add to profile.</DialogHeader>
        <DialogBody>
          <div className="grid grid-cols-3 gap-y-4 items-center	">
            {JOESCH_CHARACTERS.map((item, key) => (
              <div
                key={key}
                className="w-28 h-28 bg-[#ccc] mx-auto rounded-full overflow-hidden cursor-pointer"
                onClick={() =>
                  handleLibrary(`https://joesch.moe/api/v1/${item}`)
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
    </>
  );
}

export default Avatar;
