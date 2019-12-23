import React, {Component} from 'react';
import Filter from './filterOptions/filter';
import SearchTerm from './searchTerm/searchTerm';

class Search extends Component {
    render() {
        console.log(this.props)
        return(
            <div>
                <form>
                    <SearchTerm
                        searchTerm={this.props.searchTerm}
                        handleSearch={this.props.handleSearch}
                        />
                    <Filter
                        printType={this.props.printType}
                        bookType={this.props.bookType}
                        handlePrintFilter={this.props.handlePrintFilter}
                        handleTypeFilter={this.props.handleTypeFilter}
                        />
                </form>
            </div>
        )
    }
}

export default Search