import { Conversation } from "../conversation/Conversation";

export type AiPhoneAgent = {
  active: boolean | null;
  conversationHistory: string | null;
  conversations?: Array<Conversation>;
  createdAt: Date;
  id: string;
  language: string | null;
  name: string | null;
  responseScript: string | null;
  speechSettings: string | null;
  updatedAt: Date;
};
