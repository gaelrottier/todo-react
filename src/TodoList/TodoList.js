import React, {Component} from "react";
// import "./TodoListContainer.css";
import TodoContainer from '../Todo/TodoContainer';

export class TodoList extends Component {
    static propTypes = {
        todos: React.PropTypes.arrayOf(React.PropTypes.shape({
            id: React.PropTypes.number.isRequired,
            content: React.PropTypes.string.isRequired,
            completed: React.PropTypes.bool.isRequired
        })),
        onTextUpdate: React.PropTypes.func.isRequired // parameters : (id: int, newContent: string)
    };

    render() {
        const todosJsx = this.props.todos.map(todo =>
            <TodoContainer
                key={'todo_' + todo.id}
                todo={todo}
                onTextUpdate={this.props.onTextUpdate}
            />
        );

        return (
            <section className="todo-list">
                {todosJsx}
            </section>
        )
    }
}

export default TodoList;