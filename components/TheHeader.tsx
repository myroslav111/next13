import Link from "next/link";
import React from "react";

const TheHeader = () => {
  return (
    <header className="container bg-black text-white py-6 flex justify-center">
      <Link href="/" className="mr-3">
        Home
      </Link>
      <Link href="/blog" className="mr-3">
        Blog
      </Link>
      <Link href="/about">About</Link>
    </header>
  );
};

export default TheHeader;
