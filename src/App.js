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
    this.setState({
      printType: e.target.value
    })
    // console.log(e.target.value)
  }

  updateBookType = (e) => {
    this.setState({
      bookType: e.target.value
    })
    // console.log(e.target.value)
  }



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
