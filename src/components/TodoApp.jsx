import React, {Component} from 'react';
import TodoList from './TodoList/TodoList';
import TodoSearch from './Search';
import AddTodo from './AddTodo';
import uuid from 'node-uuid';
import {setTodos, getTodos, filterTodos} from '../api/TodoApi';


export default class TodoApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showCompleted: false,
            searchText: '',
            todos: getTodos()
        }
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    componentDidUpdate() {
        setTodos(this.state.todos);
    }
    handleAddTodo(text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false
                }
            ]
        })
    }
    handleSearch(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    }
    handleToggle(id) {
        let updatedTodos = this.state.todos.map(function(todo) {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })
        this.setState({todos: updatedTodos})
    }
    render() {
        let {todos, showCompleted, searchText} = this.state;
        let filteredTodos = filterTodos(todos, showCompleted, searchText);
        return (
            <div id="app">
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
}
