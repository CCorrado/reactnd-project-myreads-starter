import React from "react";
import Shelf from "./Shelf";

class BookShelf extends React.Component {

    constructor(props) {
        super(props)
        this.setState(props.books)
        this.changeShelf = this.changeShelf.bind(this)
        this.onShelfChange = this.onShelfChange.bind(this)
    }

    onShelfChange() {
        //no-op
    }

    changeShelf() {
        this.onShelfChange()
    }

    render() {
        const shelves = {
            currentlyReading: ['Currently Reading', 'currentlyReading'],
            wantToRead: ['Want to Read', 'wantToRead'],
            read: ['Read', 'read']
        }

        return (
            <div>
                <ol className='book-shelf-list'>
                    <div className='list-books-content'>
                        {Object.keys(shelves).map((shelf) =>
                            <Shelf key={shelf}
                                   shelf={shelves[shelf][1]}
                                   shelfTitle={shelves[shelf][0]}
                                   books={this.props.books.filter((book) => book.shelf === shelf)}
                                   onShelfChange={() => {
                                       this.changeShelf()
                                   }}
                            />
                        )}
                    </div>
                </ol>
            </div>
        )
    }
}

export default BookShelf