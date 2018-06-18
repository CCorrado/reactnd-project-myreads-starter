import React from 'react'
import * as BooksAPI from "./BooksAPI";
import {Link} from "react-router-dom";
import Shelf from "./Shelf";

class SearchBooks extends React.Component {

    constructor(props) {
        super(props);
        this.state = {searchResults: []}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const query = event.target.value
        if (query) {
            BooksAPI.search(query).then((results) => {
                if (!results.error) {
                    this.setState({results})
                } else {
                    alert("No book found with query " + query)
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
                            books={this.state.searchResults}/>
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks