import React from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends React.Component {

    book

    constructor(props) {
        super(props)
        this.book = this.props.book
        this.onShelfChange = this.onShelfChange.bind(this)
    }

    onShelfChange() {
        this.setState(this.book)
    }

    render() {
        let imageURL = ""
        if (this.book.imageLinks) {
            imageURL = this.book.imageLinks.thumbnail
        }

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: "url(" + imageURL + ")"
                    }}/>
                    <ShelfChanger
                        selectedBook={this.book}
                        onShelfChange={() => {
                            this.changeShelf(this.book)
                        }}
                    />
                </div>
                <div className="book-title">{
                    this.book.title
                }</div>
                <div className="book-authors">{
                    this.book.authors != null && this.book.authors.join(", ")
                }</div>
            </div>
        )
    }
}

export default Book