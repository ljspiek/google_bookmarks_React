import React, {Component} from 'react';

class Filter extends Component {
    render() {
        console.log(this.props)
        return(
            <div className = "filter-bar">
            <label>Print Type:</label>
            <form 
                action=""
                className="print-type-filter"
                onChange={e => this.props.handlePrintFilter(e.target.value)}>
                <select
                    id="print type"
                    name="print type">
                    >
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
            
                    {/* {options} */}
                </select>
            </form>
            <label htmlFor="book type">Book Type:</label>
                <select
                    id="book type"
                    name="book type">
                    onChange={e => this.handlePrintType(e.target.value)}>
                    <option value="None">Select one...</option>
                    <option value="free-ebooks">Free ebooks</option>
                    <option value="paid-ebooks">Paid ebooks</option>
                    <option value="ebooks">ebooks</option>
                    {/* {options} */}
                </select>
            </div>
        );
    }
}

export default Filter