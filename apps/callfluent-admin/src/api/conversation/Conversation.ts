import { AiPhoneAgent } from "../aiPhoneAgent/AiPhoneAgent";
import { User } from "../user/User";

export type Conversation = {
  aiPhoneAgent?: AiPhoneAgent | null;
  createdAt: Date;
  endTime: Date | null;
  id: string;
  startTime: Date | null;
  transcript: string | null;
  updatedAt: Date;
  user?: User | null;
};
