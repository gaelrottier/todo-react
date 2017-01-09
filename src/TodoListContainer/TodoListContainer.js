import React, {Component} from "react";
import "./TodoListContainer.css";
import TodoList from "./TodoList/TodoList";

export class TodoListContainer extends Component {
    constructor() {
        super();
        this.countTachesRestantes = this.countTachesRestantes.bind(this);

        this.state = {
            nbTachesRestantes: 0
        };
    }

    countTachesRestantes(todos) {
        const tachesRestantes = todos.filter(todo => !todo.completed).length;
        this.setState({nbTachesRestantes: tachesRestantes});
    }

    render() {
        return (
            <section>
                <h2>Nombre de t&acirc;ches restantes : {this.state.nbTachesRestantes}</h2>
                <TodoList onUpdate={this.countTachesRestantes}/>
            </section>
        );
    }
}

module.exports = TodoListContainer;