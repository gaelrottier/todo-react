import React, {Component} from "react";
import "./Todo.css";

export class Todo extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);

        this.state = {
            style: {
                textDecoration: props.todo.completed ? 'line-through' : 'none'
            }
        };
    }

    onChange(e) {
        this.props.onTextUpdate(e.target.value);
    }

    onBlur() {
        const style = this.state.style;
        const newStyle = {style};

        newStyle.textDecoration = this.props.todo.completed ? 'line-through' : 'none';

        this.setState({style: newStyle});
    }

    render() {
        return (
            <article className="todo">
                <input type="text"
                       className="todo-title"
                       value={this.props.todo.title}
                       onBlur={this.onBlur}
                       onChange={this.onChange}
                       onClick={() => this.setState({style: {textDecoration: 'none'}})}
                       style={this.state.style}/>
            </article>
        );
    }
}

export default Todo;
