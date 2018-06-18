import React from "react";
import Shelf from "./Shelf";

class BookShelf extends React.Component {

    render() {
        const {books} = this.props
        return (
            <div>
                <ol className='book-shelf-list'>
                    <li key='0' className='shelf-list-item'>
                        <Shelf
                            shelfTitle='Currently Reading'
                            books={books.filter((book) => book.shelf === "currentlyReading")}
                        />
                    </li>
                    <li key='1' className='shelf-list-item'>
                        <Shelf
                            shelfTitle='Want To Read'
                            books={books.filter((book) => book.shelf === "wantToRead")}
                        />
                    </li>
                    <li key='2' className='shelf-list-item'>
                        <Shelf
                            shelfTitle='Read'
                            books={books.filter((book) => book.shelf === "read")}
                        />
                    </li>
                </ol>
            </div>
        )
    }
}

export default BookShelf