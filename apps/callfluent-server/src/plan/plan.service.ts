import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlanServiceBase } from "./base/plan.service.base";

@Injectable()
export class PlanService extends PlanServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
