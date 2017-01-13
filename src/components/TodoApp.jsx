import React, {Component} from 'react';
import TodoList from './TodoList/TodoList'
import TodoSearch from './Search'
import AddTodo from './AddTodo'

export default class TodoApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                }, {
                    id: 2,
                    text: 'Clean the yard'
                }, {
                    id: 3,
                    text: 'Leave mail on porch'
                }, {
                    id: 4,
                    text: 'Play video games'
                }
            ]
        }
    }
    handleAddTodo(text) {
        alert('new todo: ' + text);
    }
    render() {
        var {todos} = this.state;

        return (
            <div>
                {/* <TodoSearch/> */}
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
}
