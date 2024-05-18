import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="navbar p-6 px-3 mb-12 flex gap-10 shadow-xl">
      <Link href="/">
        <div className="text-lg font-bold">Project Hub</div>
      </Link>
      <Link href="/projects">All Projects</Link>
    </nav>
  );
};

export default Nav;
