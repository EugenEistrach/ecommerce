import React from "react";
import { UserIcon } from "@heroicons/react/outline";

const Account = () => {
  return (
    <a href="#" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
      <span className="sr-only">Account</span>
      <UserIcon className="w-6 h-6" aria-hidden="true" />
    </a>
  );
};

export default Account;
