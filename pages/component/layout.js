import Navigation from "./navigation";
import Footer from "./footerComponent";

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
