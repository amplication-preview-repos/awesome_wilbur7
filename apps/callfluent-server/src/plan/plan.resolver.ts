import * as graphql from "@nestjs/graphql";
import { PlanResolverBase } from "./base/plan.resolver.base";
import { Plan } from "./base/Plan";
import { PlanService } from "./plan.service";

@graphql.Resolver(() => Plan)
export class PlanResolver extends PlanResolverBase {
  constructor(protected readonly service: PlanService) {
    super(service);
  }
}
