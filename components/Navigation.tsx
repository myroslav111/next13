"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();
  return (
    <>
      {navLinks.map((link) => {
        const isActiv = pathname === link.href;

        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActiv ? "text-orange-600" : ""}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
};

export default Navigation;
