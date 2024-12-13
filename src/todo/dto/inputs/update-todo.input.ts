import { Field, InputType, Int } from "@nestjs/graphql";
import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, Min } from "class-validator";

@InputType()
export class UpdateTodoInput{
    @Field(()=> String,{nullable:true})
    @IsString()
    @MaxLength(20)
    @IsOptional()
    description?: String

    @IsOptional()
    @Field(()=> Boolean,{nullable:true})
    done?:boolean


    @Field(()=> Int,{nullable:false})
    @IsInt()
    @Min(1)
    id?:number
}