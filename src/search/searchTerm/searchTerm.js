import React, {Component} from 'react';

class searchTerm extends Component {
    render() {
        console.log(this.props)
        return(
            <div>
                Search:
                <input 
                placeholder="Search term"
                value={this.props.searchTerm}
                // this.state.query updates as typed - check console
                onChange={e => this.props.handleSearch(e.target.value)}
                />
                <button type="submit">Search</button>
                {/* need to configure button to show results onClick */}
            </div>
        )
    }
}

export default searchTerm