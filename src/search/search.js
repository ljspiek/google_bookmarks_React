import React, {Component} from 'react';
import Filter from './filterOptions/filter';
import SearchTerm from './searchTerm/searchTerm';

class Search extends Component {
    render() {
        return(
            <div>
                <form>
                    <SearchTerm />
                    <Filter />
                </form>
            </div>
        )
    }
}

export default Search