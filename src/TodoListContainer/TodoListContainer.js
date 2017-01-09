import React, {Component} from "react";
import "./TodoListContainer.css";
import Todo from "./Todo/Todo";

export class TodoList extends Component {
    constructor(props) {
        super(props);

        this.completeTask = this.completeTask.bind(this);

        this.state = {
            todos: [
                {
                    id: 1234,
                    title: "Nettoyer le réacteur",
                    completed: false,
                },
                {
                    id: 12324,
                    title: "Cacher le corps",
                    completed: true
                },
                {
                    id: 123242,
                    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper vestibulum mauris. Sed ut tristique leo. Sed cons",
                    completed: true
                }
            ]
        }
    }

    completeTask(todo) {
        todo.completed = true;
        this.setState({todos: this.state.todos,});
    }

    render() {
        const tachesRestantes = this.state.todos.filter(todo => !todo.completed).length;

        const todoList = this.state.todos.map(todo =>
            <Todo key={'todo_' + todo.id} todo={todo} onClick={this.completeTask}/>
        );

        return (
            <section className="todo-list">
                <h2 id="taches-restantes">Nombre de t&acirc;ches restantes : {tachesRestantes}</h2>
                {todoList}
            </section>
        );
    }
}

module.exports = TodoList;