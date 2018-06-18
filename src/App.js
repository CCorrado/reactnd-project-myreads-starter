import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import {Link, Route} from 'react-router-dom'
import BookShelf from "./BookShelf";

class BooksApp extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

    render() {
        return (
            <div className="app">
                <Route path='/search' render={() => (
                    <SearchBooks/>
                )}/>
                <Route exact path='/' render={() => (
                    <div className="list-books-content">
                        <div className="list-books-title">
                            <h1>Chris' Reads</h1>
                        </div>

                        <div className="list-books-content">
                            <BookShelf books={this.state.books}/>

                            <div className="open-search">
                                <Link className='open-search' to='/search'>Add a book</Link>
                            </div>
                        </div>
                    </div>
                )}
                />
            </div>
        )
    }
}

export default BooksApp
