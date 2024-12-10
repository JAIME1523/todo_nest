import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

@InputType()
export class CreareTodoInput{
    @Field(()=> String)
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    description: String
}