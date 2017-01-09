import React, {Component} from "react";
import "./TodoListContainer.css";
import TodoList from "../TodoList/TodoList";

export class TodoListContainer extends Component {
    constructor() {
        super();
        this.countTachesRestantes = this.countTachesRestantes.bind(this);
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

    countTachesRestantes() {
        const nbTachesRestantes = this.state.todos.filter(todo => !todo.completed).length;
        this.setState({nbTachesRestantes});
    }

    addTodo() {
        const todos = this.state.todos;
        todos[todos.length] = {
            id: todos.length,
            title: '',
            completed: false
        };

        this.setState({todos});
        this.countTachesRestantes();
    }

    render() {
        return (
            <section>
                <h2>Nombre de t&acirc;ches restantes : {this.state.nbTachesRestantes}</h2>
                <button onClick={this.addTodo}>Ajouter un TODO</button>
                <TodoList todos={this.state.todos} onUpdate={this.countTachesRestantes}/>
            </section>
        );
    }
}

export default TodoListContainer;