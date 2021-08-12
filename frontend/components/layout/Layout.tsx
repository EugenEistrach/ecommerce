import { FC } from "react";
import Footer from "./footer/Footer";
import { navigation } from "./header/constants";
import Header from "./header/Header";

const Layout: FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header navigation={navigation} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
