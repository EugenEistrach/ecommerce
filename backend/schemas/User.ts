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
    createdProducts: relationship({
      ref: "Product.createdBy",
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
