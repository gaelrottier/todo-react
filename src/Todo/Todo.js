import React, {Component} from "react";
import "./Todo.css";

export class Todo extends Component {
    constructor(props) {
        super(props);
        this.onBlur = this.onBlur.bind(this);

        this.state = {
            style: {
                textDecoration: props.todo.completed ? 'line-through' : 'none'
            }
        };
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
                       className="todo-content"
                       value={this.props.todo.content}
                       onBlur={this.onBlur}
                       onChange={(e) => this.props.onTextUpdate(e.target.value)}
                       onClick={() => this.setState({style: {textDecoration: 'none'}})}
                       style={this.state.style}/>
            </article>
        );
    }
}

export default Todo;
