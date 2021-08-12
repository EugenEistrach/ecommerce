import { relationship, virtual } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { schema } from "@keystone-next/types";

export const Cart = list({
  ui: {
    hideCreate: true,
    listView: {
      // @ts-ignore
      initialColumns: ["id", "user", "items"],
    },
  },
  fields: {
    items: relationship({
      ref: "CartItem.cart",
      many: true,
      ui: {
        displayMode: "cards",
        cardFields: ["product", "quantity"],
        inlineCreate: { fields: ["product", "quantity"] },
        inlineEdit: { fields: ["product", "quantity"] },
        linkToItem: true,
        inlineConnect: true,
      },
    }),
    user: relationship({
      ref: "User.cart",
      defaultValue: ({ context }) => ({
        connect: { id: context.session.itemId },
      }),
      ui: {
        itemView: { fieldMode: "read" },
        createView: { fieldMode: "hidden" },
      },
      label: "Created by",
    }),
  },
  hooks: {
    beforeDelete: async ({ existingItem, context }) => {
      const result = await context.lists.Cart.findOne({
        where: { id: existingItem.id },
        query: "items { id }",
      });

      if (!result.items) return;

      await context.lists.CartItem.deleteMany({
        ids: result.items.map((item: { id: string }) => item.id),
      });
    },
    beforeChange: async ({ context, resolvedData }) => {
      if (!!resolvedData.items.disconnect?.length) {
        const ids = resolvedData.items.disconnect.map(
          (item: { id: string }) => item.id
        );
        await context.lists.CartItem.deleteMany({
          ids,
        });
      }
    },
  },
});
