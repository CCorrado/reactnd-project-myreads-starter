import React from "react";
import Book from "./Book"

class Shelf extends React.Component {

    render() {
        const {shelfTitle, books} = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className='book-list'>{
                        books.map((book) => (
                            <li key={book.id} className='book-list-item'>
                                <Book book={book}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf