import React, {Component} from 'react';
import Search from './search/search';
import Results from './results/results'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "react",
      printType: "All",
      bookType: "No filter",
      books: "",
      error: "",

    }
  }

  updateSearch(term) {
    this.setState({
      query: term
    })
  }

  updatePrintType(print) {
    this.setState({
      printType: print
    })
  }

  updateBookType(type) {
    this.setState({
      bookType: type
    })
  }

  componentDidMount() {
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
    const url = (`${baseUrl}${this.state.query}`)
    console.log(url)
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const books2 = data.items[0].volumeInfo.title
        console.log(books2)
        this.setState({
          books: data.items,
          error: null
        })
        console.log(this.state)
        
             
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
            handleSearch={term=>this.updateSearch(term)}
            handlePrintFilter={print=>this.updatePrintType(print)}
            handleTypeFilter={type=>this.updateBookType(type)} />
          <Results
            books={this.state.books} />

        </div>
      </main>
    );

  }
  
}

export default App;
