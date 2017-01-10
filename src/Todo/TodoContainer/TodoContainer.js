import React, {Component} from "react";
import Todo from "../Todo/Todo";

export class TodoContainer extends Component {
    constructor(props) {
        super(props);
        this.completeTask = this.completeTask.bind(this);
        this.onTextUpdate = this.onTextUpdate.bind(this);
    }

    componentDidMount() {
        this.props.onUpdate();
    }

    completeTask(todo) {
        todo.completed = true;
        this.props.onUpdate();
        this.refs.todo.updateStyle();
    }

    onTextUpdate(todo, newTitle) {
        this.props.onTextUpdate(todo, newTitle);
    }

    render() {
        const todo = this.props.todo;

        return <Todo
            key={'todo_' + todo.id}
            ref="todo"
            todo={todo}
            onTextUpdate={this.onTextUpdate}
            completeTask={this.completeTask}/>;
    }
}

export default TodoContainer;