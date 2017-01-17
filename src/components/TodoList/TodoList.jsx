import React, {Component} from 'react';
import Todo from './Todo';


export default class TodoList extends Component {
    render() {
    let {todos} = this.props;
    let renderTodos = () => {
        return todos.map((todo) => {
            return (
                <Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />
            )
        });
    };
        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
}
