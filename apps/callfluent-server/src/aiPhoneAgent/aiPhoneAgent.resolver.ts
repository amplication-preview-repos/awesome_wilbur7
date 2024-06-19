import * as graphql from "@nestjs/graphql";
import { AiPhoneAgentResolverBase } from "./base/aiPhoneAgent.resolver.base";
import { AiPhoneAgent } from "./base/AiPhoneAgent";
import { AiPhoneAgentService } from "./aiPhoneAgent.service";

@graphql.Resolver(() => AiPhoneAgent)
export class AiPhoneAgentResolver extends AiPhoneAgentResolverBase {
  constructor(protected readonly service: AiPhoneAgentService) {
    super(service);
  }
}
