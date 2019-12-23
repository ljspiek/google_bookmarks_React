import React, {Component} from 'react';

class searchTerm extends Component {
    render() {
        console.log(this.props)
        return(
            <div>
                Search:
                <input name="search term" type="text"/>
                <button>Search</button>
            </div>
        )
    }
}

export default searchTerm