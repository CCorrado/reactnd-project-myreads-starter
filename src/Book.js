import React from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends React.Component {

    render() {
        const {book} = this.props
        let imageURL = ""
        if (book.imageLinks) {
            imageURL = book.imageLinks.thumbnail
        }

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: "url(" + imageURL + ")"
                    }}/>
                    <ShelfChanger selectedBook={book}/>
                </div>
                <div className="book-title">{
                    book.title
                }</div>
                <div className="book-authors">{
                    book.authors != null && book.authors.join(", ")
                }</div>
            </div>
        )
    }
}

export default Book