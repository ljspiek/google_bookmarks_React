import React, {Component} from 'react';
import Search from './search/search';
import Results from './results/results'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      printType: "all",
      bookType: "ebooks",
      books: [],
      error: "",

    }
  }

  updateSearch = (e) => {
    this.setState({query: e.target.value})
  }


  updatePrintType = (e) => {
    // this.setState({
    //   printType: e.target.value
    // })
    console.log("test")
  }

  updateBookType = (e) => {
    this.setState({
      bookType: e.target.value
    })
    console.log(e.target.value)
  }

  // cleanData = (data) => {
  //   const cleanedData = data.items.map((book) => {
  //     if(book.volumeInfo.hasOwnProperty('imageLinks') === false) {
  //       book.volumeInfo['imageLinks'] = { thumbnail: 'http://www.asuci.uci.edu/electionsimages/na.png'}
  //     }

  //     else if(book.volumeInfo.hasOwnProperty('authors') === false) {
  //       book.volumeInfo['authors'] = "";
  //     }

  //     else if(book.saleInfo.saleability !== "FOR_SALE") {
  //       book.saleInfo.listPrice['amount'] = "N/A";
  //     }

  //     else if (book.searchInfo.hasOwnProperty('textSnippet') === false) {
  //       book.searchInfo['textSnippet'] = "";
  //     }

  //     return book;
  //   })
  //   return cleanedData;
  // }



    onSubmitForm = (e) => {
      e.preventDefault();
      const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
      const url = (`${baseUrl}${this.state.query}`)
      fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          books: [...data.items],
          error: null
        })
        
             
      });
    }
  

  



  render() {
    return (
      <main className='App'>
        <h1>Google Book Search</h1>
        <div>
          <Search
            searchTerm={this.state.query}
            printType={this.state.printType}
            bookType={this.state.bookType}
            handleSearch={this.updateSearch}
            handlePrintFilter={print=>this.updatePrintType(print)}
            handleTypeFilter={type=>this.updateBookType(type)} 
            onSubmitForm={this.onSubmitForm}/>
          <Results
            books={this.state.books} />

        </div>
      </main>
    );

  }
  
}

export default App;
