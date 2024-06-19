import { ConversationCreateNestedManyWithoutUsersInput } from "./ConversationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  conversations?: ConversationCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
