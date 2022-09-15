import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const NavBar = () => {
  return (
    <header className="header">
      <a href="#" className="logo">
        {" "}
        <span>DIAMOND</span>FITNESS{" "}
      </a>

      <div id="menu-btn" className="fas fa-bars"></div>

      <nav className="navbar">
        <Link href="#home">home</Link>
        <Link href="#about">about</Link>
        <Link href="#features">features</Link>
        <Link href="#pricing">pricing</Link>
        <Link href="#trainers">trainers</Link>
        <Link href="#blogs">blogs</Link>
      </nav>
    </header>
  );
};

export default NavBar;
