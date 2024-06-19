import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlanService } from "./plan.service";
import { PlanControllerBase } from "./base/plan.controller.base";

@swagger.ApiTags("plans")
@common.Controller("plans")
export class PlanController extends PlanControllerBase {
  constructor(protected readonly service: PlanService) {
    super(service);
  }
}
