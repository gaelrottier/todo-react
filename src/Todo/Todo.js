import React, {Component} from "react";
import "./Todo.css";

export class Todo extends Component {
    constructor(props) {
        super(props);
        this.updateStyle = this.updateStyle.bind(this);
        this.onComplete = this.onComplete.bind(this);

        this.state = {
            style: {
                textDecoration: props.todo.completed ? 'line-through' : 'none'
            }
        };
    }

    static propTypes = {
        todo: React.PropTypes.shape({
            id: React.PropTypes.number.isRequired,
            content: React.PropTypes.string.isRequired,
            completed: React.PropTypes.bool.isRequired
        }),
        onTextUpdate: React.PropTypes.func.isRequired, // parameters : (id: int, newContent: string)
        onComplete: React.PropTypes.func.isRequired // parameters : (id: int, completed: boolean)
    };

    updateStyle() {
        const style = this.state.style;
        const newStyle = {style};

        newStyle.textDecoration = this.props.todo.completed ? 'line-through' : 'none';

        this.setState({style: newStyle});
    }

    onComplete(){
        this.props.onComplete(this.props.todo.id, !this.props.todo.completed);
        this.updateStyle();
    }

    render() {
        const todo = this.props.todo;

        return (
            <article className="todo">
                <input type="text"
                       className="todo-content"
                       value={todo.content}
                       onBlur={this.updateStyle}
                       onChange={e => this.props.onTextUpdate(todo.id, e.target.value)}
                       onClick={() => this.setState({style: {textDecoration: 'none'}})}
                       style={this.state.style}/>
                <input
                    className="toggle"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={this.onComplete}
                />
            </article>
        );
    }
}

export default Todo;
