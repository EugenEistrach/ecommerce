/** @format */

import { FC } from "react";
import { useState } from "react";
import { MenuIcon, SearchIcon } from "@heroicons/react/outline";
import MobileMenu from "./mobile/MobileMenu";
import CategoryList from "./category/CategoryList";
import { Navigation } from "./types";
import Card from "./Card";
import Account from "./Account";
import Search from "./Search";
import Logo from "./Logo";

interface HeaderProps {
  navigation: Navigation;
  currencies: string[];
}

const Header: FC<HeaderProps> = ({ navigation, currencies }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <MobileMenu
        navigation={navigation}
        currencies={currencies}
        open={open}
        setOpen={setOpen}
      ></MobileMenu>

      <header className="relative">
        <nav aria-label="Top">
          <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200">
                <div className="h-16 flex items-center justify-between">
                  <div className="hidden lg:flex-1 lg:flex lg:items-center">
                    <Logo
                      src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                      name="Logo"
                      title="Workflow"
                    ></Logo>
                  </div>

                  <CategoryList navigation={navigation} />

                  <div className="flex-1 flex items-center lg:hidden">
                    <button
                      type="button"
                      className="-ml-2 bg-white p-2 rounded-md text-gray-400"
                      onClick={() => setOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Search */}
                    <Search></Search>
                  </div>

                  {/* Logo (lg-) */}
                  <div className="lg:hidden">
                    <Logo
                      src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                      name="Logo"
                      title="Workflow"
                    ></Logo>
                  </div>

                  <div className="flex-1 flex items-center justify-end">
                    <div className="flex items-center lg:ml-8">
                      <div className="hidden lg:flex">
                        <Search></Search>
                      </div>
                      <Account></Account>
                      <Card></Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
