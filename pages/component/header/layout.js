import Navigation from "./navigation";
import Footer from "../footerComponent";
import IconLink from "../iconLink";

function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
export default Layout;
