import { ConversationUpdateManyWithoutAiPhoneAgentsInput } from "./ConversationUpdateManyWithoutAiPhoneAgentsInput";

export type AiPhoneAgentUpdateInput = {
  active?: boolean | null;
  conversationHistory?: string | null;
  conversations?: ConversationUpdateManyWithoutAiPhoneAgentsInput;
  language?: string | null;
  name?: string | null;
  responseScript?: string | null;
  speechSettings?: string | null;
};
