import React, {Component} from "react";
import "./Todo.css";

export class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            style: {
                textDecoration: props.todo.completed ? 'line-through' : 'none'
            }
        };
    }

    handleClick() {
        this.props.onClick(this.props.todo);
    }

    shouldComponentUpdate() {
        return !!this.props.todo.completed;
    }

    componentWillUpdate() {
        if (this.state.style.textDecoration === 'none') {
            const style = this.state.style;
            style.textDecoration = 'line-through';
            this.setState({style,});
        }
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
