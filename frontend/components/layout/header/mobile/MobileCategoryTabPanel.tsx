import { Tab } from "@headlessui/react";
import React, { FC } from "react";
import { CategoryProps } from "../types";

const MobileCategoryTabPanel: FC<CategoryProps> = ({ category }) => {
  return (
    <Tab.Panel key={category.name} className="px-4 py-6 space-y-12">
      <div className="grid grid-cols-2 gap-x-4 gap-y-10">
        {category.featured.map((item) => (
          <div key={item.name} className="group relative">
            <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                className="object-center object-cover"
              />
            </div>
            <a
              href={item.href}
              className="mt-6 block text-sm font-medium text-gray-900"
            >
              <span className="absolute z-10 inset-0" aria-hidden="true" />
              {item.name}
            </a>
            <p aria-hidden="true" className="mt-1 text-sm text-gray-500">
              Shop now
            </p>
          </div>
        ))}
      </div>
    </Tab.Panel>
  );
};

export default MobileCategoryTabPanel;
