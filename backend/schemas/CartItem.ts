import { integer, relationship, virtual } from "@keystone-next/fields";
import { gql, list } from "@keystone-next/keystone/schema";
import { schema } from "@keystone-next/types";

export const CartItem = list({
  ui: {
    listView: {
      // @ts-ignore
      initialColumns: ["id", "cart", "product", "quantity"],
    },
    hideCreate: true,
  },
  fields: {
    product: relationship({
      ref: "Product",
      hooks: {
        validateInput: ({ operation, resolvedData, addValidationError }) => {
          if (operation == "create" && !resolvedData.product) {
            addValidationError("CartItem needs to have a product!");
          }

          if (resolvedData?.product?.disconnect) {
            addValidationError("Product can not be removed from CartItem!");
          }
        },
      },
    }),
    quantity: integer({
      defaultValue: 1,
      isRequired: true,
    }),
    cart: relationship({
      ref: "Cart.items",
      ui: {
        itemView: { fieldMode: "read" },
        createView: { fieldMode: "hidden" },
      },
    }),
    label: virtual({
      ui: {
        itemView: {
          fieldMode: "hidden",
        },
      },
      field: schema.field({
        type: schema.String,
        resolve: async (item, args, context) => {
          const {
            product: { name },
            quantity,
          } = await context.lists.CartItem.findOne({
            where: { id: item.id.toString() },
            query: gql`product { name } quantity`,
          });
          return `${quantity} x ${name}`;
        },
      }),
    }),
  },
});
