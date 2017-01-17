import React, {Component} from 'react';

export default class Todo extends Component {
    render() {
        let {id, text, completed, onToggle} = this.props
        // console.log(this.props);
        return (
            <div>
                <input type="checkbox" id={id} onChange={function() {
                    onToggle(id);
                }} checked={completed}/>
                <label htmlFor={id}>{text}</label>
            </div>
        )
    }
}
