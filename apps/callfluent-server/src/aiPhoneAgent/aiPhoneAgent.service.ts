import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AiPhoneAgentServiceBase } from "./base/aiPhoneAgent.service.base";

@Injectable()
export class AiPhoneAgentService extends AiPhoneAgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
