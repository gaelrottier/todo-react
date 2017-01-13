import React, {Component} from "react";
import Todo from "./Todo";

export class TodoContainer extends Component {
    constructor(props) {
        super(props);
        this.completeTask = this.completeTask.bind(this);
        this.onTextUpdate = this.onTextUpdate.bind(this);

        this.state = {todo: props.todo};
    }

    componentDidMount() {
        this.props.onUpdate(this.state.todo);
    }

    completeTask() {
        const todo = this.state.todo;

        todo.completed = true;
        this.setState({todo});

        this.refs.todo.updateStyle();
        this.props.onUpdate(todo);
    }

    onTextUpdate(newContent) {
        const todo = this.state.todo;

        todo.content = newContent;
        this.setState({todo});
        this.props.onUpdate(todo);
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