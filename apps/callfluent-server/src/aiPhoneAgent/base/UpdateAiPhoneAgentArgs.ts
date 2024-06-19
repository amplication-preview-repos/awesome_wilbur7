/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AiPhoneAgentWhereUniqueInput } from "./AiPhoneAgentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AiPhoneAgentUpdateInput } from "./AiPhoneAgentUpdateInput";

@ArgsType()
class UpdateAiPhoneAgentArgs {
  @ApiProperty({
    required: true,
    type: () => AiPhoneAgentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AiPhoneAgentWhereUniqueInput)
  @Field(() => AiPhoneAgentWhereUniqueInput, { nullable: false })
  where!: AiPhoneAgentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AiPhoneAgentUpdateInput,
  })
  @ValidateNested()
  @Type(() => AiPhoneAgentUpdateInput)
  @Field(() => AiPhoneAgentUpdateInput, { nullable: false })
  data!: AiPhoneAgentUpdateInput;
}

export { UpdateAiPhoneAgentArgs as UpdateAiPhoneAgentArgs };
