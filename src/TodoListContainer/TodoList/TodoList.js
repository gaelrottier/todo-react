import React, {Component} from "react";
// import "./TodoListContainer.css";
import Todo from "../Todo/Todo";

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
                    completed: false
                },
                {
                    id: 123242,
                    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper vestibulum mauris. Sed ut tristique leo. Sed cons",
                    completed: true
                }
            ]
        };
    }

    componentDidMount(){
        this.props.onUpdate(this.state.todos);
    }

    completeTask(todo) {
        todo.completed = true;
        this.setState({todos: this.state.todos});
        this.props.onUpdate(this.state.todos);
    }

    render() {
        const todosJsx = this.state.todos.map(todo =>
            <Todo key={'todo_' + todo.id} todo={todo} onClick={this.completeTask}/>
        );

        return (
            <section className="todo-list">
                {todosJsx}
            </section>
        )
    }
}

module.exports = TodoList;