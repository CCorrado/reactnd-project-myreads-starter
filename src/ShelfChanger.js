import * as BooksAPI from "./BooksAPI";
import React from "react";

class ShelfChanger extends React.Component {
    selectedBook;

    constructor(props) {
        super(props);
        this.selectedBook = this.props.selectedBook
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const shelf = event.target.value
        BooksAPI.update(this.selectedBook, shelf).then(() => {
            // alert("You moved " + this.selectedBook.title + " to the " + shelf + " shelf.");
            //TODO Come up with a better way to reload the page?
            window.location.reload()
        })
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.selectedBook.shelf} onChange={this.handleChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default ShelfChanger