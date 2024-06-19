import { Conversation } from "../conversation/Conversation";
import { JsonValue } from "type-fest";

export type User = {
  conversations?: Array<Conversation>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
