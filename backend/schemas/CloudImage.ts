import "dotenv/config";

import { list } from "@keystone-next/keystone/schema";
import { cloudinaryImage } from "@keystone-next/cloudinary";
import { relationship, text } from "@keystone-next/fields";

export const CloudImage = list({
  fields: {
    image: cloudinaryImage({
      isRequired: true,
      cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME!,
        apiKey: process.env.CLOUDINARY_API_KEY!,
        apiSecret: process.env.CLOUDINARY_API_SECRET!,
        folder: process.env.CLOUDINARY_API_FOLDER!,
      },
    }),
    name: text(),
    products: relationship({ ref: "Product.images", many: true }),
  },
  ui: {
    listView: {
      initialColumns: ["name", "image", "products"],
    },
    labelField: "name",
  },
});
