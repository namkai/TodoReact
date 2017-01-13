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
            this.refs.todoText = '';
            this.props.onAddTodo(todoText);
        } else {
            this.refs.todoText.focus();
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todoText" placeholder="What do you need to do?"/>
                    <button className="btn">Add Todo</button>
                </form>
            </div>
        );
    }
};
