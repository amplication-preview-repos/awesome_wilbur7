/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ConversationService } from "../conversation.service";
import { ConversationCreateInput } from "./ConversationCreateInput";
import { Conversation } from "./Conversation";
import { ConversationFindManyArgs } from "./ConversationFindManyArgs";
import { ConversationWhereUniqueInput } from "./ConversationWhereUniqueInput";
import { ConversationUpdateInput } from "./ConversationUpdateInput";

export class ConversationControllerBase {
  constructor(protected readonly service: ConversationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Conversation })
  async createConversation(
    @common.Body() data: ConversationCreateInput
  ): Promise<Conversation> {
    return await this.service.createConversation({
      data: {
        ...data,

        aiPhoneAgent: data.aiPhoneAgent
          ? {
              connect: data.aiPhoneAgent,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        aiPhoneAgent: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        endTime: true,
        id: true,
        startTime: true,
        transcript: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Conversation] })
  @ApiNestedQuery(ConversationFindManyArgs)
  async conversations(@common.Req() request: Request): Promise<Conversation[]> {
    const args = plainToClass(ConversationFindManyArgs, request.query);
    return this.service.conversations({
      ...args,
      select: {
        aiPhoneAgent: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        endTime: true,
        id: true,
        startTime: true,
        transcript: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Conversation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async conversation(
    @common.Param() params: ConversationWhereUniqueInput
  ): Promise<Conversation | null> {
    const result = await this.service.conversation({
      where: params,
      select: {
        aiPhoneAgent: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        endTime: true,
        id: true,
        startTime: true,
        transcript: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Conversation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateConversation(
    @common.Param() params: ConversationWhereUniqueInput,
    @common.Body() data: ConversationUpdateInput
  ): Promise<Conversation | null> {
    try {
      return await this.service.updateConversation({
        where: params,
        data: {
          ...data,

          aiPhoneAgent: data.aiPhoneAgent
            ? {
                connect: data.aiPhoneAgent,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          aiPhoneAgent: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          endTime: true,
          id: true,
          startTime: true,
          transcript: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Conversation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteConversation(
    @common.Param() params: ConversationWhereUniqueInput
  ): Promise<Conversation | null> {
    try {
      return await this.service.deleteConversation({
        where: params,
        select: {
          aiPhoneAgent: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          endTime: true,
          id: true,
          startTime: true,
          transcript: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/book-appointment")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async BookAppointment(
    @common.Body()
    body: string
  ): Promise<string> {
    return this.service.BookAppointment(body);
  }
}
