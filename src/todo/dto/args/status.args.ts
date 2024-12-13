import { ArgsType, Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsBoolean, IsOptional } from "class-validator";

@InputType()
export class StatusArgs {
    
    //Status
    @Field(()=> Boolean,{nullable:true})
        @IsBoolean()
        @IsOptional()
        statusAr?: Boolean
}