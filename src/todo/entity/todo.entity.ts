import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(()=> Int)
  id: number;

  @Field(()=> String)
  description: String;

  @Field(()=> Boolean)
  done: boolean = false;
}
