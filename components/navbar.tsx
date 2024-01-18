import Link from "next/link";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "600" });

export default function Navbar() {
  return (
    <div className={inter.className}>
      <div className="navbar">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl" href="/">
            Dev Empire
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/ambassador">Ambassador</Link>
            </li>
            <li>
            <Link href="/development">Development</Link>
            </li>
            <li>
            <Link href="/opensource">Open Source</Link>
            </li>
            <li>
            <Link href="/games">Games</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
