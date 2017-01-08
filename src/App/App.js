import React, {Component} from 'react';
import Todolist from '../TodoList/TodoList';
import './App.css';

class App extends Component {
    render() {
        return (
            <section className="center">
                <Todolist />
            </section>
        );
    }
}

export default App;
