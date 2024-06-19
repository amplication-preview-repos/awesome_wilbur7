import { SortOrder } from "../../util/SortOrder";

export type AiPhoneAgentOrderByInput = {
  active?: SortOrder;
  conversationHistory?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  language?: SortOrder;
  name?: SortOrder;
  responseScript?: SortOrder;
  speechSettings?: SortOrder;
  updatedAt?: SortOrder;
};
