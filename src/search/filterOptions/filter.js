import React, {Component} from 'react';

class Filter extends Component {
    render() {
        return(
            <div>
            <label htmlFor="print type">Print Type:</label>
                <select
                    id="print type"
                    name="print type">
                    // onChange={e => this.changeSelection(e.target.value)}>
                    <option value="None">Select one...</option>
                    {/* {options} */}
                </select>
            <label htmlFor="book type">Book Type:</label>
                <select
                    id="book type"
                    name="book type">
                    // onChange={e => this.changeSelection(e.target.value)}>
                    <option value="None">Select one...</option>
                    {/* {options} */}
                </select>
            </div>
        );
    }
}

export default Filter