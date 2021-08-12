/** @format */

import { Popover } from "@headlessui/react";
import { FC } from "react";
import { Navigation } from "../types";
import Category from "./Category";

export interface CategoryListProps {
  navigation: Navigation;
}

const CategoryList: FC<CategoryListProps> = ({ navigation }) => {
  return (
    <div className="hidden h-full lg:flex">
      {/* Flyout menus */}
      <Popover.Group className="px-4 bottom-0 inset-x-0">
        <div className="h-full flex justify-center space-x-8">
          {navigation.categories.map((category) => (
            <Category category={category}></Category>
          ))}
        </div>
      </Popover.Group>
    </div>
  );
};

export default CategoryList;
