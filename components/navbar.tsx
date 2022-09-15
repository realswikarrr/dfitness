import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const NavBar = () => {
  return (
    <header className="header">
      <Link href="/">
        <span className="logo cursor-pointer">
          <span>DIAMOND</span>FITNESS
        </span>
      </Link>

      <nav className="navbar">
        <Link href="/" scroll={true}>
          home
        </Link>
        <Link href="/products">products</Link>
        <Link href="/#about">about</Link>
        <Link href="/#features">features</Link>
        <Link href="/#pricing">pricing</Link>
        <Link href="/#trainers">trainers</Link>
        <Link href="/#blogs">blogs</Link>
      </nav>
    </header>
  );
};

export default NavBar;
