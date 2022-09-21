import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const NavBar = () => {
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
          <a> Products</a>
        </Link>
        <Link href="/#about">
          <a> About</a>
        </Link>
        <Link href="/#features">
          <a> Features</a>
        </Link>
        <Link href="/#pricing">
          <a> Pricing</a>
        </Link>

        <Link href="/#blogs">
          <a> Blogs</a>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
