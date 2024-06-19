import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BillingService } from "./billing.service";
import { BillingControllerBase } from "./base/billing.controller.base";

@swagger.ApiTags("billings")
@common.Controller("billings")
export class BillingController extends BillingControllerBase {
  constructor(protected readonly service: BillingService) {
    super(service);
  }
}
