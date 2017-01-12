import React, {Component} from 'react';

export default class Todo extends Component {
    render() {
        let {id, text} = this.props
        return (
            <div>
                {id}. {text}
            </div>
        )
    }
}
