import React, {Component} from 'react';

export default class TodoSearch extends Component {
    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this)
    }
    handleSearch() {
        let showCompleted = this.refs.showCompleted.checked;
        let searchText = this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchText)
    }
    render() {
        return (
            <div id="search-todo">
                <div>
                    <h4>Todo List</h4>
                </div>
                <div>
                    <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
                </div>
                <div>
                    <input type="checkbox" id="indeterminate-checkbox" onChange={this.handleSearch} ref="showCompleted"/>
                    <label htmlFor="indeterminate-checkbox">Show completed todos</label>
                </div>
                
                <hr/>

            </div>
        )
    }
}
