import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entity/todo.entity';
import { CreateTodoInput, StatusArgs, UpdateTodoInput } from './dto';


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
    {
      id: 4,
      description: 'Piedra del Tiempo',
      done: true,
    },
  ];
get totalTodos(){
  return this.todos.length
}

get completerTodos(){
  return this.todos.filter((todo) => todo.done == true).length;

}

get pendingTodos(){
  return this.todos.filter((todo) => todo.done == false).length;

}

  finAll(statusAr?: StatusArgs): Todo[] {
    if (statusAr?.statusAr == undefined) return this.todos;
    return this.todos.filter((todo) => todo.done == statusAr.statusAr);
  }

  findOne(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) throw new NotFoundException(`Todo with id  ${id} not found`);
    return todo;
  }

  create(createTodo: CreateTodoInput): Todo {
    const todo = new Todo();
    todo.description = createTodo.description;
    todo.id = Math.max(...this.todos.map((todo) => todo.id), 0) + 1;
    this.todos.push(todo);
    return todo;
  }

  update({ id, description, done }: UpdateTodoInput) {
    const todoUp = this.findOne(id);
    if (description) todoUp.description = description;
    if (done !== undefined) todoUp.done = done;
    this.todos = this.todos.map((todo) => (todo.id == id ? todoUp : todo));
    return todoUp;
  }

  remove(id: number): Boolean {
    const todosr = this.findOne(id);
    console.log(todosr);
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return true;
  }
}
