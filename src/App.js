import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import {Link, Route} from 'react-router-dom'
import Shelf from "./Shelf";

class BooksApp extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

    static checkShelf(shelf, actual) {
        return shelf === actual;
    }

    render() {
        return (
            <div className="app">
                <Route path='/search' render={({history}) => (
                    <SearchBooks
                        allBooks={this.state.books}
                    />
                )}/>
                <Route exact path='/' render={({history}) => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>Chris' Reads</h1>
                        </div>

                        <div className="list-books-content">
                            <div>
                                <ol className='book-shelf-list'>
                                    <li key='0' className='shelf-list-item'>
                                        <Shelf
                                            shelfTitle='Currently Reading'
                                            books={this.state.books.filter((book) => book.shelf === "currentlyReading")}
                                        />
                                    </li>
                                    <li key='1' className='shelf-list-item'>
                                        <Shelf
                                            shelfTitle='Currently Reading'
                                            books={this.state.books.filter((book) => book.shelf === "wantToRead")}
                                        />
                                    </li>
                                    <li key='2' className='shelf-list-item'>
                                        <Shelf
                                            shelfTitle='Currently Reading'
                                            books={this.state.books.filter((book) => book.shelf === "read")}
                                        />
                                    </li>
                                    ))}
                                </ol>
                            </div>
                        </div>

                        <div className="open-search">
                            <Link className='open-search' to='/search'>Add a book</Link>
                        </div>
                    </div>
                )}
                />
            </div>
        )
    }
}

export default BooksApp
