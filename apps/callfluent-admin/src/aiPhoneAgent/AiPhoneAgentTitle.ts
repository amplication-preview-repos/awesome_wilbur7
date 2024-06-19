import { AiPhoneAgent as TAiPhoneAgent } from "../api/aiPhoneAgent/AiPhoneAgent";

export const AIPHONEAGENT_TITLE_FIELD = "name";

export const AiPhoneAgentTitle = (record: TAiPhoneAgent): string => {
  return record.name?.toString() || String(record.id);
};
