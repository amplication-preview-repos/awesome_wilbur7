import { Module } from "@nestjs/common";
import { MailWizzIntegrationService } from "./mailwizzintegration.service";
import { MailWizzIntegrationController } from "./mailwizzintegration.controller";
import { MailWizzIntegrationResolver } from "./mailwizzintegration.resolver";

@Module({
  controllers: [MailWizzIntegrationController],
  providers: [MailWizzIntegrationService, MailWizzIntegrationResolver],
  exports: [MailWizzIntegrationService],
})
export class MailWizzIntegrationModule {}
