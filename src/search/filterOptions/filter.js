import React, {Component} from 'react';

class Filter extends Component {
    render() {
        console.log(this.props)
        return(
            <div className = "filter-bar">
            <label>Print Type:</label>
            
                <select
                    id="print type"
                    name="print type"
                    onChange={this.props.handlePrintFilter}>
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                    
                </select>
           
            <label htmlFor="book type">Book Type:</label>
                <select
                    id="book type"
                    name="book type"
                    onChange={this.props.handleTypeFilter}>
                    <option value="None">Select one...</option>
                    <option value="free-ebooks">Free ebooks</option>
                    <option value="paid-ebooks">Paid ebooks</option>
                    <option value="ebooks">ebooks</option>
                </select>
            </div>
        );
    }
}

export default Filter