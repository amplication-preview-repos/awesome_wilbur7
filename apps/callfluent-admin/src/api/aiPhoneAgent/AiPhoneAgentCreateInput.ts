import { ConversationCreateNestedManyWithoutAiPhoneAgentsInput } from "./ConversationCreateNestedManyWithoutAiPhoneAgentsInput";

export type AiPhoneAgentCreateInput = {
  active?: boolean | null;
  conversationHistory?: string | null;
  conversations?: ConversationCreateNestedManyWithoutAiPhoneAgentsInput;
  language?: string | null;
  name?: string | null;
  responseScript?: string | null;
  speechSettings?: string | null;
};
