import { Injectable } from "@nestjs/common";
import { ListManagementInput } from "../mailWizzIntegration/ListManagementInput";
import { ImportListInput } from "../mailWizzIntegration/ImportListInput";
import { ImportListWithMappingInput } from "../mailWizzIntegration/ImportListWithMappingInput";
import { UpdatedImportListWithMappingInput } from "../mailWizzIntegration/UpdatedImportListWithMappingInput";
import { SubscribeUserInput } from "../mailWizzIntegration/SubscribeUserInput";

@Injectable()
export class MailWizzIntegrationService {
  constructor() {}
  async CreateList(args: ListManagementInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async DeleteList(args: ListManagementInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async ImportList(args: ImportListInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async ImportListWithMapping(args: ImportListWithMappingInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async ImportListWithMappingWithPhone(args: UpdatedImportListWithMappingInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async SubscribeUserToList(args: SubscribeUserInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async UpdateList(args: ListManagementInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
