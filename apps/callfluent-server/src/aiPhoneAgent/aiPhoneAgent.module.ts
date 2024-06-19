import { Module } from "@nestjs/common";
import { AiPhoneAgentModuleBase } from "./base/aiPhoneAgent.module.base";
import { AiPhoneAgentService } from "./aiPhoneAgent.service";
import { AiPhoneAgentController } from "./aiPhoneAgent.controller";
import { AiPhoneAgentResolver } from "./aiPhoneAgent.resolver";

@Module({
  imports: [AiPhoneAgentModuleBase],
  controllers: [AiPhoneAgentController],
  providers: [AiPhoneAgentService, AiPhoneAgentResolver],
  exports: [AiPhoneAgentService],
})
export class AiPhoneAgentModule {}
