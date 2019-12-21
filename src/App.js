import React, {Component} from 'react';
import Search from './search/search';
import Results from './results/results'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: null,
      filterOptions: "All",
      printType: ""

    }
  }

  componentDidMount() {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=popular';
    fetch('https://www.googleapis.com/books/v1/volumes?q=popular')
      .then(response => response.json())
      .then(data => {
        const books = data.items
        const books2 = data.items[0].volumeInfo
        console.log(books)
        console.log(books2)
             
      });
    }

  



  render() {
    return (
      <main className='App'>
        <h1>Google Book Search</h1>
        <div>
          <Search />
          <Results />

        </div>
      </main>
    );

  }
  
}

export default App;
