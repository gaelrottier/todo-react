import React, {Component} from "react";
import "./TodoList.css";
import TodoList from "./TodoList";

export class TodoListContainer extends Component {
    constructor() {
        super();
        this.onUpdate = this.onUpdate.bind(this);
        this.addTodo = this.addTodo.bind(this);

        this.state = {
            todos: [
                {
                    id: 0,
                    title: "Nettoyer le réacteur",
                    completed: false,
                },
                {
                    id: 1,
                    title: "Cacher le corps",
                    completed: false
                },
                {
                    id: 2,
                    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper vestibulum mauris. Sed ut tristique leo. Sed cons",
                    completed: true
                }
            ],
            nbTachesRestantes: 0
        };
    }

    onUpdate(newTodo) {
        const todos = this.state.todos;
        const todo = todos.find(todoFind => todoFind.id === newTodo.id);

        todo.title = newTodo.title;
        todo.completed = newTodo.completed;

        const nbTachesRestantes = this.state.todos.filter(todoFilter => !todoFilter.completed).length;

        this.setState({todos, nbTachesRestantes});
    }

    addTodo() {
        const todos = this.state.todos;
        todos[todos.length] = {
            id: todos.length,
            title: 'Title goes here',
            completed: false
        };

        this.setState({todos});
        this.onUpdate();
    }

    render() {
        return (
            <section>
                <h2>Nombre de t&acirc;ches restantes : {this.state.nbTachesRestantes}</h2>
                <button onClick={this.addTodo}>Ajouter un TODO</button>
                <TodoList todos={this.state.todos} onUpdate={this.onUpdate}/>
            </section>
        );
    }
}

export default TodoListContainer;