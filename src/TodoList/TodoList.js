import React, {Component} from "react";
import Todo from '../Todo/Todo';

export class TodoList extends Component {
    static propTypes = {
        todos: React.PropTypes.arrayOf(React.PropTypes.shape({
            id: React.PropTypes.number.isRequired,
            content: React.PropTypes.string.isRequired,
            completed: React.PropTypes.bool.isRequired
        })),
        onTextUpdate: React.PropTypes.func.isRequired, // parameters : (id: int, newContent: string)
        onComplete: React.PropTypes.func.isRequired // parameters : (id: int, completed: boolean)
    };

    render() {
        const todosJsx = this.props.todos.map(todo =>
            <Todo
                key={'todo_' + todo.id}
                todo={todo}
                onTextUpdate={this.props.onTextUpdate}
                onComplete={this.props.onComplete}/>
        );

        return (
            <section className="todo-list">
                {todosJsx}
            </section>
        )
    }
}

export default TodoList;