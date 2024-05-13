import React, { useEffect, useRef, useState } from "react";

import {
  Dialog,
  DialogHeader,
  DialogBody,
  Button,
} from "@/libraries/material-tailwind";

function TakePhoto({
  isOpen,
  onHandler,
  onImageCapture,
}: {
  isOpen: boolean;
  onHandler: (value: any) => void;
  onImageCapture: (value: any) => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const handleCapture = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.getContext("2d")?.drawImage(videoRef.current, 0, 0, 300, 150);
      onImageCapture(canvas.toDataURL("image/jpeg"));
    }
  };
  useEffect(() => {
    let stream: any;
    const startCamera = async () => {
      stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      if (videoRef.current) videoRef.current.srcObject = stream;
    };
    if (isOpen) {
      startCamera();
    }
    return () => {
      stream?.getTracks().forEach((track: any) => track.stop());
    };
  }, [isOpen]);

  return (
    <Dialog size="sm" open={isOpen} handler={onHandler}>
      <DialogHeader>Capture Photo</DialogHeader>
      <DialogBody className="flex flex-col items-center">
        <video src="" width={400} autoPlay={true} ref={videoRef}></video>
        <Button
          className="rounded-full w-10 h-10 p-0 border-[5px] bg-primary border-[#a29696] mt-5"
          onClick={handleCapture}
        >
          {""}
        </Button>
      </DialogBody>
    </Dialog>
  );
}

export default TakePhoto;
