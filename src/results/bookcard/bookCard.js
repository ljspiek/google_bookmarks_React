import React, {Component} from 'react';

class BookCard extends Component {
    render() {

        let cost 
        let image
        let snippet

        if (this.props.price) {
            cost = this.props.price.saleability === "FOR_SALE"
            ? '$' + this.props.price.listPrice.amount
            : null;
        } else {
            cost = null
        }

        if (this.props.image) {
            image = this.props.image.thumbnail !== undefined
            ? this.props.image.thumbnail
            : "http://www.asuci.uci.edu/electionsimages/na.png";
        } else {
            image = "http://www.asuci.uci.edu/electionsimages/na.png"
        }

        if(this.props.snippet) {
            snippet = this.props.snippet.textSnippet !== undefined
            ? this.props.snippet.textSnippet
            : null;
        } else {
            snippet = null
        }

        
        
        return(
            <div className="card">
                <img src={image} alt=""/>
                <h2>{this.props.title}</h2>
                <h3>Author: {this.props.author}</h3>
                <h4>{cost}</h4>
                <p>{snippet}</p>
            </div>
        )
    }
}

export default BookCard