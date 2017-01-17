import React, {Component} from 'react';

export default class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        let todoText = this.refs.todoText.value;
        if(todoText.length > 0 ) {
            this.props.onAddTodo(todoText);
            todoText = '';
        } else {
            this.refs.todoText.focus();
        }
    }
    render() {
        return (
            <div id="Add-Todo">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todoText" placeholder="What do you need to do?"/>
                    <button className="btn">Add Todo</button>
                </form>
            </div>
        );
    }
};
