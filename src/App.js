import React, {Component} from 'react';
import Search from './search/search';
import Results from './results/results'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseUrl: 'https://www.googleapis.com/books/v1/volumes?q=',
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
    setTimeout(this.updateBookResults, 500)
    // console.log(e.target.value)
  }

  updateBookType = (e) => {
    this.setState({
      bookType: e.target.value
    })
    setTimeout(this.updateBookResults, 500);
    console.log(e.target.value)
  }

  updateBookResults = () => {
    const url = (`${this.state.baseUrl}${this.state.query}&filter=${this.state.bookType}&printType=${this.state.printType}`)
    console.log("updated", url)
      fetch(url)
      .then(response => response.json())
      .then(data => {
        if(data.totalItems){
          this.setState({
            books: [...data.items],
            error: null
          })
        }
        else {
          this.setState({
            error: "No results found"
          })
          alert("No results found")
        }
        
        
             
      });
  }

  
  



    onSubmitForm = (e) => {
      e.preventDefault();
      this.updateBookResults();
      // const url = (`${this.state.baseUrl}${this.state.query}&filter=${this.state.bookType}&printType=${this.state.printType}`)
      // fetch(url)
      // .then(response => response.json())
      // .then(data => {
      //   this.setState({
      //     books: [...data.items],
      //     error: null
      //   })
        
             
      // });
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
