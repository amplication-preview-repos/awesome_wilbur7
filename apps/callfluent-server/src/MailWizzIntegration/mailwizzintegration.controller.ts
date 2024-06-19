import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MailWizzIntegrationService } from "./mailwizzintegration.service";
import { ListManagementInput } from "../mailWizzIntegration/ListManagementInput";

@swagger.ApiTags("mailWizzIntegrations")
@common.Controller("mailWizzIntegrations")
export class MailWizzIntegrationController {
  constructor(protected readonly service: MailWizzIntegrationService) {}

  @common.Post("/create-list")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateList(
    @common.Body()
    body: ListManagementInput
  ): Promise<string> {
        return this.service.CreateList(body);
      }

  @common.Delete("/delete-list")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteList(
    @common.Body()
    body: ListManagementInput
  ): Promise<string> {
        return this.service.DeleteList(body);
      }

  @common.Post("/import-list")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ImportList(
    @common.Body()
    body: ListManagementInput
  ): Promise<string> {
        return this.service.ImportList(body);
      }

  @common.Post("/import-list-with-mapping")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ImportListWithMapping(
    @common.Body()
    body: ListManagementInput
  ): Promise<string> {
        return this.service.ImportListWithMapping(body);
      }

  @common.Post("/import-list-with-mapping-with-phone")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ImportListWithMappingWithPhone(
    @common.Body()
    body: ListManagementInput
  ): Promise<string> {
        return this.service.ImportListWithMappingWithPhone(body);
      }

  @common.Post("/subscribe-user")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SubscribeUserToList(
    @common.Body()
    body: ListManagementInput
  ): Promise<string> {
        return this.service.SubscribeUserToList(body);
      }

  @common.Put("/update-list")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateList(
    @common.Body()
    body: ListManagementInput
  ): Promise<string> {
        return this.service.UpdateList(body);
      }
}
