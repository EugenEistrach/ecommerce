import { createSchema, list } from "@keystone-next/keystone/schema";
import { User } from "./User";
import { CloudImage } from "./CloudImage";
import { Product } from "./Product";
import { Cart } from "./Cart";
import { CartItem } from "./CartItem";
import { Order } from "./Order";
import { OrderItem } from "./OrderItem";
import { Address } from "./Address";

export const lists = createSchema({
  User,
  Address,
  Product,
  Order,
  OrderItem,
  Cart,
  CartItem,
  CloudImage,
});
