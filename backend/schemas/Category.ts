import { integer, relationship, select, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const Category = list({
  fields: {
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
    code: text({ isRequired: true, isUnique: true }),
    name: text({ isRequired: true }),
    description: text({ ui: { displayMode: "textarea" } }),
    images: relationship({
      ref: "CloudImage.categories",
      ui: {
        displayMode: "cards",
        cardFields: ["image", "name"],
        inlineCreate: { fields: ["image", "name"] },
        inlineEdit: { fields: ["image", "name"] },
      },
      many: true,
    }),
    parentCategories: relationship({
      ref: "Category.childCategories",
      many: true,
    }),
    childCategories: relationship({
      ref: "Category.parentCategories",
      label: "Subcategories",
      many: true,
    }),

    products: relationship({
      ref: "Product.categories",
      many: true,
    }),
    user: relationship({
      ref: "User.categories",
      label: "Created By",
      defaultValue: ({ context }) => ({
        connect: { id: context.session.itemId },
      }),
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
});
