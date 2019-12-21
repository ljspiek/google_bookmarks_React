import React, {Component} from 'react';

class searchTerm extends Component {
    render() {
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