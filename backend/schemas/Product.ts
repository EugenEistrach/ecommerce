import { integer, relationship, select, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const Product = list({
  fields: {
    name: text({ isRequired: true }),
    description: text({ ui: { displayMode: "textarea" } }),
    images: relationship({
      ref: "CloudImage.products",
      ui: {
        displayMode: "cards",
        cardFields: ["image", "name"],
        inlineCreate: { fields: ["image", "name"] },
        inlineEdit: { fields: ["image", "name"] },
      },
      many: true,
    }),
    status: select({
      options: [
        { label: "Draft", value: "DRAFT" },
        { label: "Published", value: "PUBLISHED" },
      ],
      defaultValue: "DRAFT",
      ui: {
        displayMode: "segmented-control",
        createView: { fieldMode: "hidden" },
      },
    }),
    price: integer(),
    createdBy: relationship({
      ref: "User.products",
      defaultValue: ({ context }) => ({
        connect: { id: context.session.itemId },
      }),
    }),
  },
});
