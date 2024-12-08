import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {

    @Query(()=> String) 
    helloWorld():String{
        return "Hola mundo"
    }
    @Query(()=> String) 
    helloWorld2():String{
        return "Hola mundo2"
    }
}
