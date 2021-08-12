import { FC } from "react";
import Footer from "./footer/Footer";
import { currencies, navigation } from "./header/constants";
import Header from "./header/Header";

const Layout: FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header navigation={navigation} currencies={currencies} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
