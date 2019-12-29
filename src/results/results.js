import React from 'react';
import BookCard from '../results/bookcard/bookCard'

const Results = (props) => {

    // let forSale = null;
    //     // if(props.books.saleInfo.saleability === "FOR_SALE") {
    //     //     forSale = this.props.saleInfo.listPrice.amount
    //     // }

    //     console.log(props.books.saleInfo)

    return(
        <div className="ResultsList">
            {
                props.books.map((book, i) => {
                    return <BookCard 
                                key={i}
                                image={book.volumeInfo.imageLinks}
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors}
                                price={book.saleInfo}
                                snippet={book.searchInfo}
                            />
                })
            }
        </div>
    )
    
}

export default Results