import { AiPhoneAgentWhereUniqueInput } from "../aiPhoneAgent/AiPhoneAgentWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ConversationUpdateInput = {
  aiPhoneAgent?: AiPhoneAgentWhereUniqueInput | null;
  endTime?: Date | null;
  startTime?: Date | null;
  transcript?: string | null;
  user?: UserWhereUniqueInput | null;
};
