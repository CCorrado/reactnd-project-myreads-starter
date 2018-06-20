import React from "react";
import Book from "./Book"

class Shelf extends React.Component {

    constructor(props) {
        super(props)
        this.onShelfChange = this.onShelfChange.bind(this)
    }

    onShelfChange() {
        this.setState()
    }

    render() {
        const {shelfTitle, books} = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className='books-grid'>{
                        books.map((book) => (
                            <li key={book.id} className='book-list-item'>
                                <Book
                                    book={book}
                                    onShelfChange={() => {
                                        this.changeShelf()
                                    }}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf