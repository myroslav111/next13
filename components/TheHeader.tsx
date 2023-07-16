import Link from "next/link";
import React from "react";
import Navigation from "./Navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const TheHeader = () => {
  return (
    <header className="container bg-black text-white py-6 flex justify-evenly ">
      {/* <Link href="/" className="mr-3">
        Home
      </Link>
      <Link href="/blog" className="mr-3">
        Blog
      </Link>
      <Link href="/about">About</Link> */}
      <Navigation navLinks={navItems} />
    </header>
  );
};

export default TheHeader;
