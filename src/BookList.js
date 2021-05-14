import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf';

class BookList extends Component {
    render() {
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">
                    Currently Reading
                    </h2>
                  <BookShelf
                   books={this.props.books.filter((book) => book.shelf === "currentlyReading")} 
                   onShelfUpdate={this.props.onShelfUpdate}
                  />
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <BookShelf
                   books={this.props.books.filter((book) => book.shelf === "wantToRead")} 
                   onShelfUpdate={this.props.onShelfUpdate}
                  />
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <BookShelf
                   books={this.props.books.filter((book) => book.shelf === "read")} 
                   onShelfUpdate={this.props.onShelfUpdate}
                  />
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link 
                to="/search"
                className="search-books"
              ><button>Search</button></Link>
            </div>
          </div>
        );
    };
};

export default BookList;