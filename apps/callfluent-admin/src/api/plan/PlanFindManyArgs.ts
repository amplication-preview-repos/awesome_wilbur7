import { PlanWhereInput } from "./PlanWhereInput";
import { PlanOrderByInput } from "./PlanOrderByInput";

export type PlanFindManyArgs = {
  where?: PlanWhereInput;
  orderBy?: Array<PlanOrderByInput>;
  skip?: number;
  take?: number;
};
