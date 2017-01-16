import React, {Component} from "react";
import TodoList from "./TodoList";

export class TodoListContainer extends Component {
    constructor() {
        super();
        this.countTachesRestantes = this.countTachesRestantes.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.onComplete = this.onComplete.bind(this);
        this.onTextUpdate = this.onTextUpdate.bind(this);

        this.state = {
            todos: [
                {
                    id: 0,
                    content: "Nettoyer le réacteur",
                    completed: false,
                },
                {
                    id: 1,
                    content: "Cacher le corps",
                    completed: false
                },
                {
                    id: 2,
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper vestibulum mauris. Sed ut tristique leo. Sed cons",
                    completed: true
                }
            ],
            nbTachesRestantes: 0
        };
    }

    componentDidMount(){
        this.countTachesRestantes();
    }

    onComplete(id, completed) {
        const todos = this.state.todos;
        const todo = todos.find(todo => todo.id === id);

        todo.completed = completed;

        this.setState({todos});

      this.countTachesRestantes();
    }

    onTextUpdate(id, newContent) {
        const todos = this.state.todos;
        const todo = todos.find(todo => todo.id === id);

        todo.content = newContent;

        this.setState({todos});
    }

    countTachesRestantes() {
        const nbTachesRestantes = this.state.todos.filter(todo => !todo.completed).length;

        this.setState({nbTachesRestantes});
    }

    addTodo() {
        const todos = this.state.todos;
        todos.concat({
            id: todos[todos.length - 1].id + 1,
            content: 'Title goes here',
            completed: false
        });

        this.setState({todos});
        this.countTachesRestantes();
    }

    render() {
        return (
            <section>
                <h2>Nombre de t&acirc;ches restantes : {this.state.nbTachesRestantes}</h2>
                <TodoList todos={this.state.todos} onTextUpdate={this.onTextUpdate} onComplete={this.onComplete}/>
            </section>
        );
    }
}

export default TodoListContainer;