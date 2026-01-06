// src/components/layout/PageWrapper.jsx
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageWrapper({ children, fullBleed = false }) {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className={fullBleed ? "layout-full" : "layout-contained"}>{children}</main>
      <Footer />
    </div>
  );
}
