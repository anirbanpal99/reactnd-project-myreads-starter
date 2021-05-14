import React, { Component } from 'react';

class BookShelf extends Component {
    render() {
        const allBooks = this.props.books;
        return (
            <div className="bookshelf-books">
                {allBooks.length === 0 ?
                <p>Nothing to Show</p>
                : 
                    <ol className="books-grid">
                        {allBooks.map((book) => (
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + book.imageLinks.thumbnail + ')'}}>
                                        <div className="book-shelf-changer">
                                            <select defaultValue={book.shelf} onChange={(event) => this.props.onShelfUpdate(book, event.target.value)}>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading" >Currently Reading</option>
                                                <option value="wantToRead" >Want to Read</option>
                                                <option value="read" >Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors[0]}</div>
                            </div>
                        </li>
                    ))}
                 </ol>
                }
            </div>
        );
    };
};

export default BookShelf;