import { relationship, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const Address = list({
  fields: {
    fullname: text({ isRequired: true }),
    nickname: text(),
    phone: text(),
    addressLine1: text({ isRequired: true }),
    addressLine2: text(),
    zipCode: text({ isRequired: true }),
    town: text({ isRequired: true }),
    country: text({ isRequired: true }),
    user: relationship({
      ref: "User.addresses",
    }),
  },
});
