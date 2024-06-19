import * as graphql from "@nestjs/graphql";
import { ListManagementInput } from "../mailWizzIntegration/ListManagementInput";
import { ImportListInput } from "../mailWizzIntegration/ImportListInput";
import { ImportListWithMappingInput } from "../mailWizzIntegration/ImportListWithMappingInput";
import { UpdatedImportListWithMappingInput } from "../mailWizzIntegration/UpdatedImportListWithMappingInput";
import { SubscribeUserInput } from "../mailWizzIntegration/SubscribeUserInput";
import { MailWizzIntegrationService } from "./mailwizzintegration.service";

export class MailWizzIntegrationResolver {
  constructor(protected readonly service: MailWizzIntegrationService) {}

  @graphql.Mutation(() => String)
  async CreateList(
    @graphql.Args()
    args: ListManagementInput
  ): Promise<string> {
    return this.service.CreateList(args);
  }

  @graphql.Mutation(() => String)
  async DeleteList(
    @graphql.Args()
    args: ListManagementInput
  ): Promise<string> {
    return this.service.DeleteList(args);
  }

  @graphql.Mutation(() => String)
  async ImportList(
    @graphql.Args()
    args: ImportListInput
  ): Promise<string> {
    return this.service.ImportList(args);
  }

  @graphql.Mutation(() => String)
  async ImportListWithMapping(
    @graphql.Args()
    args: ImportListWithMappingInput
  ): Promise<string> {
    return this.service.ImportListWithMapping(args);
  }

  @graphql.Mutation(() => String)
  async ImportListWithMappingWithPhone(
    @graphql.Args()
    args: UpdatedImportListWithMappingInput
  ): Promise<string> {
    return this.service.ImportListWithMappingWithPhone(args);
  }

  @graphql.Mutation(() => String)
  async SubscribeUserToList(
    @graphql.Args()
    args: SubscribeUserInput
  ): Promise<string> {
    return this.service.SubscribeUserToList(args);
  }

  @graphql.Mutation(() => String)
  async UpdateList(
    @graphql.Args()
    args: ListManagementInput
  ): Promise<string> {
    return this.service.UpdateList(args);
  }
}
