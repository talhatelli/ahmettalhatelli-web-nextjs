import Link from "next/link";
function Navigation() {
  return (
    <div className="link">
      <nav>
        <Link href="/">
          <a> &nbsp; Ana sayfa &nbsp;</a>
        </Link>
        <Link href="/about">
          <a> &nbsp; Hakkımda &nbsp;</a>
        </Link>
        <br />
        <br />
      </nav>{" "}
    </div>
  );
}
export default Navigation;
