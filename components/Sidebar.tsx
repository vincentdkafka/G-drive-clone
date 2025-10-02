"use client";

import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props{
  fullName: string,
  avatar: string
  email: string,


}

const Sidebar = ({fullName, avatar, email}: Props) => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <Link href="/">
        <Image
          src="/logo3.png"
          alt="logo"
          width={180}
          height={50}
          className="hidden h-auto lg:block"
        />
      </Link>

      <Image
        src="/small-logo.svg"
        alt="logo"
        width={52}
        height={52}
        className="lg:hidden"
      />

      <nav className="sidebar-nav">
        <ul className="flex flex-1 flex-col gap-6">
          {navItems.map(({ url, name, icon }) => (
            <Link key={name} href="{url}" className="lg:w-full">
              <li
                className={cn(
                  "sidebar-nav-item",
                  pathname === url && "shad-active"
                )}
              >
                <Image
                  src={icon}
                  alt={name}
                  width={24}
                  height={24}
                  className={cn(
                    "nav-icon",
                    pathname === url && "nav-icon-active"
                  )}
                />
                <p className="hidden lg:block">{name}</p>
              </li>
            </Link>
          ))}
        </ul>
        
      </nav>

      <Image
      src="/folder2.png"
      alt="logo"
      width={506}
      height={41}
      className="w-full"/>


      <div className="sidebar-user-info">
        <Image
        src="https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg"
        alt="avatar"
        width={54}
        height={54}
        className="sidebar-user-avatar"/>

        <div className="hidden lg:block">
          <p className="subtitle-2 capitalize">{fullName}</p>
          <p className="caption" >{email}</p>
        </div>

      </div>
    </aside>
  );
};

export default Sidebar;
