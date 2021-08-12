/** @format */

import { Tab } from "@headlessui/react";
import React, { FC } from "react";
import { classNames } from "../../../../libs/classNames";
import { Category, CategoryProps } from "../types";

const MobileCategoryTab: FC<CategoryProps> = ({ category }) => {
  return (
    <Tab
      key={category.name}
      className={({ selected }) =>
        classNames(
          selected
            ? "text-indigo-600 border-indigo-600"
            : "text-gray-900 border-transparent",
          "flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
        )
      }
    >
      {category.name}
    </Tab>
  );
};

export default MobileCategoryTab;
