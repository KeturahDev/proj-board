import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="mb-12">
      <Link href="/">
        <h1 className="font-bold">Project Hub</h1>
      </Link>
    </div>
  );
};

export default Nav;
