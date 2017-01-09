import React, {Component} from "react";
import "./TodoListContainer.css";
import TodoList from "./TodoList/TodoList";

export class TodoListContainer extends Component {
    constructor() {
        super();
        this.countTachesRestantes = this.countTachesRestantes.bind(this);
        this.addTodo = this.addTodo.bind(this);

        this.state = {
            nbTachesRestantes: 0
        };
    }

    countTachesRestantes(todos) {
        const nbTachesRestantes = todos.filter(todo => !todo.completed).length;
        this.setState({nbTachesRestantes});
    }

    addTodo(){
        this.refs.todoList.addTodo();
    }

    render() {
        return (
            <section>
                <h2>Nombre de t&acirc;ches restantes : {this.state.nbTachesRestantes}</h2>
                <button onClick={this.addTodo}>Ajouter un TODO</button>
                <TodoList ref="todoList" onUpdate={this.countTachesRestantes}/>
            </section>
        );
    }
}

module.exports = TodoListContainer;