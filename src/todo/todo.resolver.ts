import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';
import { CreareTodoInput } from './dto/inputs/create-todo.input';

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [Todo], {
    name: 'todos',
    description: 'Obtienes la tista de todos los todos',
  })
  finAll() {
    return this.todoService.finAll();
  }

  @Query(() => Todo, { name: 'todo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.todoService.findOne(id);
  }

  @Mutation(()=> Todo, {name: "createTodo"})
  create(@Args("createTodoInput") createToInput:CreareTodoInput) {
    console.log({createToInput})
    return this.todoService.create(createToInput);

  }

  update() {}

  remove() {}
}
