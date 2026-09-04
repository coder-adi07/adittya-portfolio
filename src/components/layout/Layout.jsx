import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 dark:bg-[#09090b] dark:text-neutral-100 transition-colors duration-300">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
