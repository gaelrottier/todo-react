import React, {Component} from "react";
// import "./TodoListContainer.css";
import Todo from "../Todo/Todo";

export class TodoContainer extends Component {
    constructor(props) {
        super(props);
        this.completeTask = this.completeTask.bind(this);
    }

    componentDidMount() {
        this.props.onUpdate(this.props.todos);
    }

    completeTask(todo) {
        todo.completed = true;
        this.props.onUpdate(this.props.todos);
    }

    render() {
        const todo = this.props.todo;

        return <Todo key={'todo_' + todo.id} todo={todo} completeTask={this.completeTask}/>;
    }
}

export default TodoContainer;