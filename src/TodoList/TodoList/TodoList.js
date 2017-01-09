import React, {Component} from "react";
// import "./TodoListContainer.css";
import TodoContainer from '../../Todo/TodoContainer/TodoContainer';

export class TodoList extends Component {
    render() {
        const todosJsx = this.props.todos.map(todo =>
            <TodoContainer
                key={'todo_' + todo.id}
                todo={todo}
                onClick={this.props.completeTask}
                onUpdate={this.props.onUpdate}
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