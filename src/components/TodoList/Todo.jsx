import React, {Component} from 'react';
import moment from 'moment';

export default class Todo extends Component {
    render() {
        console.log(this.props);
        let {id, text, completed, onToggle, createdAt, completedAt} = this.props
        let renderDate = () => {
            let message = 'Created';
            let timestamp = createdAt;

            if(completed) {
                message = 'Completed';
                timestamp = completedAt;
            }

            return `${message}  ${moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')}`
        }
        return (
            <div>
                <input type="checkbox" id={id} onChange={function() {
                    onToggle(id);
                }} checked={completed}/>
                <label htmlFor={id}>{text} - <span className="timestamp">{renderDate()} </span></label>
            </div>
        )
    }
}
