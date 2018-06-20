import * as BooksAPI from "./BooksAPI";
import React from "react";

class ShelfChanger extends React.Component {
    selectedBook;

    constructor(props) {
        super(props);
        this.selectedBook = this.props.selectedBook
        this.handleChange = this.handleChange.bind(this);
        this.onShelfChange = this.onShelfChange.bind(this)
    }

    onShelfChange() {
        this.setState(this.selectedBook)
        return this.selectedBook
    }

    handleChange(event) {
        const shelf = event.target.value
        BooksAPI.update(this.selectedBook, shelf).then(() => {
            // alert("You moved " + this.selectedBook.title + " to the " + shelf + " shelf.");
            this.selectedBook.shelf = shelf
            this.onShelfChange()
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