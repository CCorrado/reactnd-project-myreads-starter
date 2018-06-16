import React from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends React.Component {

    render() {
        const {coverURL, bookTitle, bookAuthor} = this.props
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: coverURL
                    }}/>
                    <div className="book-shelf-changer">
                        <ShelfChanger/>
                    </div>
                </div>
                <div className="book-title">{
                    bookTitle
                }</div>
                <div className="book-authors">{
                    bookAuthor
                }</div>
            </div>
        )
    }
}

export default Book