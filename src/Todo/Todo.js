import React, {Component} from "react";
import "./Todo.css";

export class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.updateStyle = this.updateStyle.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = {
            style: {
                textDecoration: props.todo.completed ? 'line-through' : 'none'
            },
            editing: false,
            title: props.todo.title
        };
    }

    handleClick() {
        this.props.completeTask(this.props.todo);
        this.setState({editing: false});
    }

    updateStyle() {
        const style = this.state.style;
        const newStyle = {style};

        newStyle.textDecoration = this.props.todo.completed ? 'line-through' : 'none';

        this.setState({style: newStyle});
    }

    editTodo() {
        this.setState({editing: !this.state.editing});
    }

    onBlur() {
        this.props.onTextUpdate(this.state.title);
        this.setState({editing: false});
    }

    onChange(e) {
        this.props.onTextUpdate(e.target.value);
        this.setState({title: e.target.value});
    }

    render() {
        const todo = this.props.todo;

        return (
            <article className="todo">
                {!this.state.editing &&
                <span className="todo-title" onClick={this.editTodo} style={this.state.style}>{todo.title}</span>}
                {this.state.editing &&
                <input type="text"
                       className="todo-title"
                       value={this.state.title}
                       onBlur={this.onBlur}
                       onChange={this.onChange}
                       style={this.state.style}/>}
                <button className="btn-check-todo" onClick={this.handleClick}>Finir</button>
            </article>
        );
    }
}

export default Todo;
