import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';
import { randomInt } from 'crypto';

@Resolver()
export class HelloWorldResolver {

    @Query(()=> String, {description: "Hola es lo que regresa", name:'hello'}) 
    helloWorld():String{
        return "Hola mundo"
    }
    @Query(()=> Float,{name:'ramdonNumber'}) 
    getNumber():number{
        var valor  = Math.random()*100;
        return valor;
    }

    @Query(()=> Int,{name:'ramdonFronZeroTo', description :"from zero to arugument"}) 
    getRamdonFronZeroTO(@Args('to',{type:()=> Int, nullable: true})  to: number= 6):number {
        return Math.floor(Math.random() * to);
       
    }
}
