import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';
import { AggregationsType, CreateTodoInput, StatusArgs, UpdateTodoInput } from './dto';


@Resolver(()=> Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [Todo], {
    name: 'todos',
    description: 'Obtienes la tista de todos los todos',
  })
  finAll(@Args("status", {type:()=> StatusArgs, nullable: true}) statusAr?: StatusArgs) {
    console.log({statusAr})

    return this.todoService.finAll(statusAr);
  }

  @Query(() => Todo, { name: 'todo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.todoService.findOne(id);
  }

  @Mutation(()=> Todo, {name: "createTodo"})
  create(@Args("createTodoInput") createToInput:CreateTodoInput) {
    console.log({createToInput})
    return this.todoService.create(createToInput);

  }

  @Mutation(()=> Todo, {name: "updateTodo"})
  update(@Args("UpdateTodo")  upodatetodo:UpdateTodoInput) {
    return this.todoService.update(upodatetodo)
  }
  @Mutation(()=> Boolean)
  remove(@Args('id',{type:()=> Int})id:number):Boolean {
   return this.todoService.remove(id);
  }

  //Agregation
  @Query(()=> Int, {name:"totalTodos"})
  totalTodos(): number{
    return this.todoService.totalTodos; 
  }

  //completedTodos
  @Query(()=> Int, {name:"completedTodos"})
  completedTodos(): number{
    return this.todoService.completerTodos; 
  }
  //pendingTodos
  @Query(()=> Int, {name:"pendingTodos"})
  pendingTodos(): number{
    return this.todoService.pendingTodos; 
  }

  @Query(()=> AggregationsType )
  aggregations():AggregationsType{
    return {
      completed: this.todoService.completerTodos,
      pending:this.todoService.pendingTodos,
      total: this.todoService.totalTodos,
      totalTodoscompleted: this.todoService.totalTodos
    }
  }
}
