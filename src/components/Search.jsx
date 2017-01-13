import React, {Component} from 'react';

export default class TodoSearch extends Component {
    constructor(props) {
        super(props);

    }
    handleSearch() {
        let showCompleted = this.refs.showCompleted.checked;
        let searchText = this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchText)
    }
    render() {
        return (
            <div>
                <div>
                    <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" id="indeterminate-checkbox" onChange={this.handleSearch}/>
                        <label htmlFor="indeterminate-checkbox">Indeterminate Style</label>
                    </label>
                </div>
            </div>
        )
    }
}
