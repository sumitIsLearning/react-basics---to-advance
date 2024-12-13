import { atom, atomFamily } from "recoil";
import { TODOS } from "./todo";

export const todoAtomFamily = atomFamily({
    key:"todoAtomFamily",
    default: id => {
       const foundTodo = TODOS.find(todo => todo.id === id)
       if(!foundTodo) return false;
       return foundTodo;
    }
})

// so what is atom family , atom family is a function that return a recoil state atom , basically return a atom or more specifically return a function that dynamically returns atom based on input

