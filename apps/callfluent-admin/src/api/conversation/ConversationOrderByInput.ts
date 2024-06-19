import { SortOrder } from "../../util/SortOrder";

export type ConversationOrderByInput = {
  aiPhoneAgentId?: SortOrder;
  createdAt?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  startTime?: SortOrder;
  transcript?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
