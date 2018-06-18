import React from 'react'
import * as BooksAPI from "./BooksAPI";
import {Link} from "react-router-dom";
import Shelf from "./Shelf";

class SearchBooks extends React.Component {

    constructor(props) {
        super(props);
        this.state = {results: []}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const query = event.target.value
        if (query) {
            BooksAPI.search(query.trim()).then((results) => {
                if (!results.error) {
                    this.setState({results})
                }
            })
        }
    }

    render() {
        return (
            <div className="search-books-bar-wrapper">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                               placeholder="Search by title or author"
                               onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <Shelf
                            books={this.state.results}/>
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks