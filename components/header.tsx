import Link from "next/link";
import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
function Header() {
  return (
    <header className=" py-5">
      <div className="container">
        <Link href={""} className="flex gap-2 w-fit">
          <Image src={logo} alt="logo" className="w-10" />
          <span className="font-body font-semibold tracking-tighter text-primary text-[24px]">
            Chat App
          </span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
