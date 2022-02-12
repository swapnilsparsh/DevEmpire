import Menu from "./Menu";
import Navbar from "./navbar/Links";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  );
}
