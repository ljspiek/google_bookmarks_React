import React, {Component} from 'react';

class Filter extends Component {
    render() {
        console.log(this.props)
        return(
            <div>
            <label htmlFor="print type">Print Type:</label>
                <select
                    id="print type"
                    name="print type">
                    onChange={e => this.updatePrintType(e.target.value)}>
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
            
                    {/* {options} */}
                </select>
            <label htmlFor="book type">Book Type:</label>
                <select
                    id="book type"
                    name="book type">
                    onChange={e => this.updatePrintType(e.target.value)}>
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