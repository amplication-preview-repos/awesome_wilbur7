import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ConversationListRelationFilter } from "../conversation/ConversationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type AiPhoneAgentWhereInput = {
  active?: BooleanNullableFilter;
  conversationHistory?: StringNullableFilter;
  conversations?: ConversationListRelationFilter;
  id?: StringFilter;
  language?: StringNullableFilter;
  name?: StringNullableFilter;
  responseScript?: StringNullableFilter;
  speechSettings?: StringNullableFilter;
};
