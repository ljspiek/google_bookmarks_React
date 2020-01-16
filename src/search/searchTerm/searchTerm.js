import React, {Component} from 'react';

class searchTerm extends Component {
    render() {
        // console.log(this.props)
        return(
            <div>
                Search:
                <input 
                placeholder="Search term"
                value={this.props.searchTerm}
                // this.state.query updates as typed - check console
                onChange={this.props.handleSearch}
                />
                <button type="submit">Search</button>
            </div>
        )
    }
}

export default searchTerm