import React, { useRef, useState } from "react";
import profile from "@/public/profile.png";
import Image from "next/image";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@/libraries/material-tailwind";

import { useFormContext, useWatch } from "react-hook-form";
import TakePhoto from "./takePhoto";
import LibraryPhoto from "./libraryPhoto";

function Avatar() {
  const { setValue, getValues, formState } = useFormContext();
  const value = useWatch({ name: "profileImage" });
  const { errors } = formState;

  const fileRef = useRef<HTMLInputElement>(null);
  const [photoLibraryIsOpen, setPhotoLibraryIsOpen] = useState(false);
  const [takePhotoIsOpen, setTakePhotoIsOpen] = useState(false);
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
  const handleLibraryPhoto = (url: string) => {
    setValue("profileImage", url);
    setPhotoLibraryIsOpen(!photoLibraryIsOpen);
  };
  const handleLibrary = () => setPhotoLibraryIsOpen(!photoLibraryIsOpen);

  const handleRemovePhoto = () => {
    setValue("profileImage", "");
  };

  const handleTakePhoto = () => {
    setTakePhotoIsOpen(!takePhotoIsOpen);
  };
  const handleCapturePhoto = (image: any) => {
    setValue("profileImage", image);
    setTakePhotoIsOpen(false);
  };
  const profileImage = getValues("profileImage");
  return (
    <>
      <Menu
        placement="top-start"
        offset={{ mainAxis: -250, crossAxis: 80 }}
        {...value}
      >
        <MenuHandler>
          <div
            className={`flex justify-center mb-5 relative  mx-auto  bg-[#ccc] [&_div]:hover:visible cursor-pointer overflow-hidden rounded-full w-[140px] h-[140px] border-[2px] ${
              !!errors["profileImage"]?.message
                ? "border-red-900"
                : "border-white"
            }`}
          >
            {profileImage ? (
              <img src={profileImage} alt="" className=" w-full object-fill" />
            ) : (
              <Image src={profile} alt="" className=" w-full object-cover" />
            )}
            {/* <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-60 w-[98%] h-[98%] 
          rounded-full flex justify-center items-center flex-col invisible transition-all"
            >
              <Icon
                icon="ph:camera-light"
                className="text-[30px] text-[#fff]"
              />
              <p className="font-body text-[12px] text-[#fff]">Change photo</p>
            </div> */}
            <label htmlFor="profileImage" className="hidden">
              profileImage
            </label>
            <input
              onChange={handleChangePhoto}
              ref={fileRef}
              id="profileImage"
              type="file"
              name="profileImage"
              className="hidden"
              placeholder=""
            />
          </div>
        </MenuHandler>

        <MenuList>
          <MenuItem onClick={handleTakePhoto}>Take Photo</MenuItem>
          <MenuItem onClick={handleLibrary}>Choose From Library</MenuItem>
          <MenuItem onClick={handleUploadPhoto}>Upload Photo</MenuItem>
          <MenuItem onClick={handleRemovePhoto}>Remove Photo</MenuItem>
        </MenuList>
      </Menu>
      <LibraryPhoto
        isOpen={photoLibraryIsOpen}
        onLibraryPhoto={handleLibraryPhoto}
        onHandler={handleLibrary}
      />
      <TakePhoto
        isOpen={takePhotoIsOpen}
        onHandler={handleTakePhoto}
        onImageCapture={handleCapturePhoto}
      />
    </>
  );
}

export default Avatar;
