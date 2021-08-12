import { integer, relationship } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const CartItem = list({
  ui: {
    listView: {
      // @ts-ignore
      initialColumns: ["id", "product", "quantity", "cart"],
    },
    hideCreate: true,
  },
  fields: {
    cart: relationship({
      ref: "Cart.items",
      ui: {
        itemView: { fieldMode: "read" },
        createView: { fieldMode: "hidden" },
      },
    }),
    product: relationship({
      ref: "Product",
      ui: { itemView: { fieldMode: "read" } },
      hooks: {
        validateInput: ({ resolvedData, addValidationError }) => {
          if (!resolvedData.product) {
            addValidationError("CartItem needs to have a product!");
            return;
          }

          if (resolvedData.product.disconnect) {
            addValidationError("Product can not be removed from CartItem!");
          }
        },
      },
    }),
    quantity: integer({
      defaultValue: 1,
      isRequired: true,
    }),
  },
});
