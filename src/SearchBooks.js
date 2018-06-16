import React from 'react'

class SearchBooks extends React.Component {

    render() {
        const {allBooks, query} = this.props
        return (
            <div className="search-books-bar-wrapper">
                <div className="search-books-bar">
                    <a className="close-search" onClick={() => this.setState({showSearchPage: false})}>Close</a>
                    <div className="search-books-input-wrapper">
                        // TODO finish search
                        {}
                        <input type="text" placeholder="Search by title or author"/>

                    </div>
                </div>
                <div className="search-books-results">
                    //TODO finish search results
                    <ol className="books-grid"></ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks