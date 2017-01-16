import React, {Component} from "react";
// import "./TodoListContainer.css";
import TodoContainer from '../Todo/TodoContainer';

export class TodoList extends Component {
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