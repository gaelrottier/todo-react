import React, {Component} from "react";
// import "./TodoListContainer.css";
import Todo from "../Todo/Todo";

export class TodoList extends Component {
    constructor(props) {
        super(props);
        this.completeTask = this.completeTask.bind(this);
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
            ]
        };
    }

    componentDidMount() {
        this.props.onUpdate(this.state.todos);
    }

    completeTask(todo) {
        todo.completed = true;
        this.setState({todos: this.state.todos});
        this.props.onUpdate(this.state.todos);
    }

    addTodo() {
        const todos = this.state.todos;
        todos[todos.length] = {
            id: todos.length,
            title: '',
            completed: false
        };

        this.setState({todos});
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

export default TodoList;