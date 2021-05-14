import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchBook extends Component {

    render() {
        const allBooks = this.props.searchedBooks === undefined ? [] : this.props.searchedBooks
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link 
                    to="/"
                    className="home-page">
                        <button className="close-search">
                        Close
                        </button> 
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" 
                        placeholder="Search by title or author" 
                        onChange={(event) => this.props.onSearch(event.target.value.trim())}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    {!allBooks.length?
                    <center><p>Nothing to Show</p></center>
                       : 
                        <ol className="books-grid">
                            {allBooks.map((book) => (
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover"
                                         style={{ 
                                            width: 128, height: 193, 
                                            backgroundImage: 
                                               'url(' + 
                                               (!book.hasOwnProperty('imageLinks')
                                               ? "" 
                                               : book.imageLinks.thumbnail) + ')'
                                               }}
                                               >
                                            <div className="book-shelf-changer">
                                                <select  defaultValue={book.shelf}  onChange={(event) => this.props.onShelfUpdate(book, event.target.value)}>
                                                    <option value="move" disabled>Move to...</option>
                                                    <option value="currentlyReading" >Currently Reading</option>
                                                    <option value="wantToRead" >Want to Read</option>
                                                    <option value="read" >Read</option>
                                                    <option value="none" >None</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    {book.hasOwnProperty('authors')
                                    ? 
                                    <div className="book-authors">
                                       { book.authors.map((author) => (
                                             <p>{author}</p>
                                        ))}
                                    </div>
                                    : ""
                                    }
                                </div>
                            </li>
                        ))}
                    </ol>
                    }
                </div>
            </div>
        );
    };
};

export default SearchBook;