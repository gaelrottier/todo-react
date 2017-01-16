import React, {Component} from "react";
import Todo from "./Todo";

export class TodoContainer extends Component {
    constructor(props) {
        super(props);
        this.completeTask = this.completeTask.bind(this);
    }

    static propTypes = {
        todo: React.PropTypes.shape({
            id: React.PropTypes.number.isRequired,
            content: React.PropTypes.string.isRequired,
            completed: React.PropTypes.bool.isRequired
        }),
        onTextUpdate: React.PropTypes.func.isRequired // parameters : (id: int, newContent: string)
    };

    completeTask() {
        const todo = this.state.todo;

        todo.completed = true;
        this.setState({todo});

        this.props.countTachesRestantes(todo);
    }

    render() {
        const todo = this.props.todo;

        return <Todo
            key={'todo_' + todo.id}
            todo={todo}
            onTextUpdate={this.props.onTextUpdate}
            completeTask={this.completeTask}/>;
    }
}

export default TodoContainer;