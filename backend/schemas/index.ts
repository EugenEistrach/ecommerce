import { createSchema, list } from "@keystone-next/keystone/schema";
import { User } from "./User";
import { CloudImage } from "./CloudImage";

export const lists = createSchema({
  User,
  CloudImage,
});
