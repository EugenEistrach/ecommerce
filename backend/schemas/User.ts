import { list } from "@keystone-next/keystone/schema";
import { text, password, relationship } from "@keystone-next/fields";

export const User = list({
  ui: {
    listView: {
      initialColumns: ["name", "email"],
    },
  },
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password({ isRequired: true }),
    cart: relationship({
      ref: "Cart.user",
    }),
    addresses: relationship({
      ref: "Address.user",
    }),
    orders: relationship({
      ref: "Order.user",
      many: true,
      ui: {
        itemView: {
          fieldMode: "read",
        },
        createView: {
          fieldMode: "hidden",
        },
      },
    }),
    categories: relationship({
      ref: "Category.user",
      label: "Created categories",
      many: true,
      ui: {
        itemView: {
          fieldMode: "read",
        },
        createView: {
          fieldMode: "hidden",
        },
      },
    }),
    products: relationship({
      ref: "Product.user",
      label: "Created products",
      many: true,
      ui: {
        itemView: {
          fieldMode: "read",
        },
        createView: {
          fieldMode: "hidden",
        },
      },
    }),
  },
  hooks: {
    beforeDelete: async ({ existingItem, context }) => {
      const result = await context.lists.User.findOne({
        where: { id: existingItem.id },
        query: "cart { id }",
      });

      if (!result.cart.id) return;

      await context.lists.Cart.deleteOne({
        id: result.cart.id,
      });
    },
  },
});
