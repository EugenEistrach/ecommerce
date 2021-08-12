import { createSchema, list } from "@keystone-next/keystone/schema";
import { User } from "./User";
import { CloudImage } from "./CloudImage";
import { Product } from "./Product";

export const lists = createSchema({
  User,
  Product,
  CloudImage,
});
