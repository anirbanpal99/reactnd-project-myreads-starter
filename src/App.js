import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BookList from './BookList'
import SearchBook from './SearchBook'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchedBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((book) => {
      this.setState(() => ({
        books: book
      }))
    })
  }

  shelfUpdate = (book, shelf) => {
    book.shelf = shelf
    BooksAPI.update(book, shelf)
    .then(() => {
      this.setState((currentState) => ({
          books: currentState.books.filter((b) => {
            return (b.title !== book.title) ? b : book
      })
      }))
    })
    this.setState({searchedBooks: []})
  }

  searchBook = (query) => {
    BooksAPI.search(query)
    .then((books) => {
      this.setState(() => ({
        searchedBooks: books
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookList 
           books={this.state.books} 
           onShelfUpdate={this.shelfUpdate}
           />
        )} /> 
        <Route path="/search" render={({ history}) => (
          <SearchBook 
           onShelfUpdate={(book, shelf) => {
             this.shelfUpdate(book, shelf)
             history.push("/")
             this.componentDidMount()
            }}
           onSearch={this.searchBook}
           searchedBooks={this.state.searchedBooks}
           books={this.state.books}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
