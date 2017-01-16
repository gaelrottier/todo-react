import React, {Component} from "react";
import TodoList from "./TodoList";
import TodoContainer from "../Todo/TodoContainer";

export class TodoListContainer extends Component {
    constructor() {
        super();
        this.onUpdate = this.onUpdate.bind(this);
        this.addTodo = this.addTodo.bind(this);

        this.state = {
            todos: [
                {
                    id: 0,
                    content: "Nettoyer le réacteur",
                    completed: false,
                },
                {
                    id: 1,
                    content: "Cacher le corps",
                    completed: false
                },
                {
                    id: 2,
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper vestibulum mauris. Sed ut tristique leo. Sed cons",
                    completed: true
                }
            ],
            nbTachesRestantes: 0
        };
    }

    onTodoUpdate(newTodo) {
        const todos = this.state.todos;
        const todo = todos.find(todoFind => todoFind.id === newTodo.id);

        todo.content = newTodo.content;
        todo.completed = newTodo.completed;

        this.setState({todos});

        this.onUpdate();
    }

    onUpdate() {
        const nbTachesRestantes = this.state.todos.filter(todoFilter => !todoFilter.completed).length;

        this.setState({nbTachesRestantes});
    }

    addTodo() {
        const todos = this.state.todos;
        todos[todos.length] = {
            id: todos.length,
            content: 'Title goes here',
            completed: false
        };

        this.setState({todos});
        this.onUpdate();
    }

    render() {
        return (
            <section>
                <h2>Nombre de t&acirc;ches restantes : {this.state.nbTachesRestantes}</h2>
                <TodoList todos={this.state.todos} onUpdate={this.onTodoUpdate}/>
            </section>
        );
    }
}

export default TodoListContainer;