import React, {Component} from "react";
import "./Todo.css";

export class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.updateStyle = this.updateStyle.bind(this);

        this.state = {
            style: {
                textDecoration: props.todo.completed ? 'line-through' : 'none'
            }
        };
    }

    handleClick() {
        this.props.completeTask(this.props.todo);
    }

    updateStyle() {
        const style = this.state.style;
        const newStyle = {style};

        newStyle.textDecoration = this.props.todo.completed ? 'line-through' : 'none';

        this.setState({style: newStyle});
    }

    render() {
        const todo = this.props.todo;

        return (
            <article className="todo">
                <span className="todo-title" style={this.state.style}>{todo.title}</span>
                <button className="btn-check-todo" onClick={this.handleClick}>Finir</button>
            </article>
        );
    }
}

export default Todo;
