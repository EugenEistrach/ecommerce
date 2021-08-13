import { createSchema, list } from "@keystone-next/keystone/schema";
import { User } from "./User";
import { CloudImage } from "./CloudImage";
import { Product } from "./Product";
import { Cart } from "./Cart";
import { CartItem } from "./CartItem";

export const lists = createSchema({
  User,
  Product,
  Cart,
  CartItem,
  CloudImage,
});
