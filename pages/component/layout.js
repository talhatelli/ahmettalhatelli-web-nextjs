import Navigation from './navigation';
import Footer from './footerComponent';

function Layout({ children }) {
  return (
    <div className="layout-wrapper">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
export default Layout;
