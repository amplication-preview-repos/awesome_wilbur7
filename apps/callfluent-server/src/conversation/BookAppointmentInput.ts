import { Field } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

class BookAppointmentInput {
    @Field(() => Date)
    @Type(() => Date)
    startTime!: Date;

    @Field(() => Date)
    @Type(() => Date)
    endTime!: Date;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    userId!: string;
}

export { BookAppointmentInput as BookAppointmentInput };