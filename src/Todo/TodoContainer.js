import React, {Component} from "react";
import Todo from "./Todo";

export class TodoContainer extends Component {
    constructor(props) {
        super(props);
        this.completeTask = this.completeTask.bind(this);

        this.state = {todo: props.todo};
    }

    completeTask() {
        const todo = this.state.todo;

        todo.completed = true;
        this.setState({todo});

        this.props.onUpdate(todo);
    }

    render() {
        const todo = this.props.todo;

        return <Todo
            key={'todo_' + todo.id}
            todo={todo}
            onTextUpdate={newContent => this.props.onTextUpdate(newContent)}
            completeTask={this.completeTask}/>;
    }
}

export default TodoContainer;