import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entity/todo.entity';
import { CreareTodoInput } from './dto/inputs/create-todo.input';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    {
      id: 1,
      description: 'Piedra del alma',
      done: false,
    },
    {
      id: 2,
      description: 'Piedra del poder',
      done: false,
    },
    {
      id: 3,
      description: 'Piedra del espacio',
      done: false,
    },
  ];

  finAll(): Todo[]{
    return this.todos;
}


findOne(id: number){
  const todo = this.todos.find(todo => todo.id === id);
  if(!todo) throw new NotFoundException(`Todo with id  ${id} not found`);
 return todo;
}

create(createTodo: CreareTodoInput):Todo{
const todo = new Todo();
todo.description = createTodo.description;
todo.id =  Math.max(...this.todos.map(todo=> todo.id), 0)+1
this.todos.push(todo);
return todo;
}

update(){}

remove(){}
}
