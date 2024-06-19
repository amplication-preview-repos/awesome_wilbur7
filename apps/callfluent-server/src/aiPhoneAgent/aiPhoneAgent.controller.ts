import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AiPhoneAgentService } from "./aiPhoneAgent.service";
import { AiPhoneAgentControllerBase } from "./base/aiPhoneAgent.controller.base";

@swagger.ApiTags("aiPhoneAgents")
@common.Controller("aiPhoneAgents")
export class AiPhoneAgentController extends AiPhoneAgentControllerBase {
  constructor(protected readonly service: AiPhoneAgentService) {
    super(service);
  }
}
