import React, {Component} from "react";
import './Todo.css';

export class Todo extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick(this.props.todo);
    }

    render() {
        const todo = this.props.todo;

        return (
            <article className="todo">
                <span className="todo-title">{todo.title}</span>
                <button className="btn-check-todo"  onClick={this.handleClick}>Finir</button>
            </article>
        );
    }
}

module.exports = Todo;
