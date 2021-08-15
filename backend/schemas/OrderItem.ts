import { integer, relationship, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const OrderItem = list({
  ui: {
    hideCreate: true,
    hideDelete: true,
    itemView: {
      defaultFieldMode: "read",
    },
  },
  fields: {
    name: text({ isRequired: true }),
    description: text({ ui: { displayMode: "textarea" } }),
    image: relationship({
      ref: "CloudImage",
    }),
    price: integer(),
    quantity: integer(),
    order: relationship({ ref: "Order.items" }),
  },
});
