import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

/* eslint-disable @next/next/no-img-element */
const NavBar = () => {
  const { data: session } = useSession();

  return (
    <div className="header">
      <Link href="/">
        <span className="logo cursor-pointer">
          <span className="text-red-600">DIAMOND</span>
          <span className="text-white ">FITNESS</span>
        </span>
      </Link>

      <nav className="navbar">
        <Link href="/">
          <a> Home</a>
        </Link>
        <Link href="/products">
          <a> Shop</a>
        </Link>
        <Link href="/#about">
          <a> About</a>
        </Link>

        <Link href="/#blogs">
          <a> Blogs</a>
        </Link>
        {session ? (
          <Link href="/useraccount">
            <a>My Account</a>
          </Link>
        ) : (
          <a className=" cursor-pointer" onClick={() => signIn("google")}>
            {" "}
            Login
          </a>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
