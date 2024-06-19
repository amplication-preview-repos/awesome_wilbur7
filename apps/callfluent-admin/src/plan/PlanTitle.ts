import { Plan as TPlan } from "../api/plan/Plan";

export const PLAN_TITLE_FIELD = "id";

export const PlanTitle = (record: TPlan): string => {
  return record.id?.toString() || String(record.id);
};
