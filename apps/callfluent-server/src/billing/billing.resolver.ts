import * as graphql from "@nestjs/graphql";
import { BillingResolverBase } from "./base/billing.resolver.base";
import { Billing } from "./base/Billing";
import { BillingService } from "./billing.service";

@graphql.Resolver(() => Billing)
export class BillingResolver extends BillingResolverBase {
  constructor(protected readonly service: BillingService) {
    super(service);
  }
}
