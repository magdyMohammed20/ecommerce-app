import SideNav from "../components/SideNav/SideNav";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <div className="grid grid-cols-12 gap-4 p-6">
        <SideNav />
        <div className="col-span-12 lg:col-span-9">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
