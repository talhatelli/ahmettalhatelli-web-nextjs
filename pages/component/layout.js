import Navigation from './navigation';
import Footer from './footer';

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
