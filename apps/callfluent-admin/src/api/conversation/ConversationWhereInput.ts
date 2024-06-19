import { AiPhoneAgentWhereUniqueInput } from "../aiPhoneAgent/AiPhoneAgentWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConversationWhereInput = {
  aiPhoneAgent?: AiPhoneAgentWhereUniqueInput;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  startTime?: DateTimeNullableFilter;
  transcript?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
