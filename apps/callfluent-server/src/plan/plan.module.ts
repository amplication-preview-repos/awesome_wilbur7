import { Module } from "@nestjs/common";
import { PlanModuleBase } from "./base/plan.module.base";
import { PlanService } from "./plan.service";
import { PlanController } from "./plan.controller";
import { PlanResolver } from "./plan.resolver";

@Module({
  imports: [PlanModuleBase],
  controllers: [PlanController],
  providers: [PlanService, PlanResolver],
  exports: [PlanService],
})
export class PlanModule {}
