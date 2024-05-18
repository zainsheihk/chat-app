// import { MenuHandler, Avatar } from "@/libraries/material-tailwind";
// material-tailwind.d.ts
import {} from "@material-tailwind/react";

type EventCapture = {
  onPointerEnterCapture?: unknown;
  onPointerLeaveCapture?: unknown;
};

declare module "@material-tailwind/react" {
  export interface ButtonProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface InputProps extends EventCapture {
    crossOrigin?: unknown;
  }
  export interface SelectProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface TypographyProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface MenuListProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface MenuItemProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface DialogHeaderProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface DialogBodyProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface DialogFooterProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface DialogProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface Avatar extends EventCapture {
    placeholder?: unknown;
  }
}
