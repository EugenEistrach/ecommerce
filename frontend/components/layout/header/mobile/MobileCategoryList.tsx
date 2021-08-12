import { Tab } from "@headlessui/react";
import React, { FC, Fragment } from "react";
import { classNames } from "../../../../libs/classNames";
import { Navigation } from "../types";
import MobileCategoryTab from "./MobileCategoryTab";
import MobileCategoryTabPanel from "./MobileCategoryTabPanel";
import { MobileMenuProps } from "./MobileMenu";

interface MobileCategoryListProps {
  navigation: Navigation;
}

const MobileCategoryList: FC<MobileCategoryListProps> = ({ navigation }) => {
  return (
    <Tab.Group as="div" className="mt-2">
      <div className="border-b border-gray-200">
        <Tab.List className="-mb-px flex px-4 space-x-8">
          {navigation.categories.map((category) => (
            <MobileCategoryTab category={category}></MobileCategoryTab>
          ))}
        </Tab.List>
      </div>
      <Tab.Panels as={Fragment}>
        {navigation.categories.map((category) => (
          <MobileCategoryTabPanel category={category}></MobileCategoryTabPanel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default MobileCategoryList;
