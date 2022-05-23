import React, { useState } from 'react'
import { Link, } from 'react-router-dom';
import axios from 'axios';
import { GoSearch } from 'react-icons/go';
import BooksPage from './BooksPage';

const Form = () => {

    const [search, setSearch] = useState("")

    const [bookData, setData] = useState([])

    const API_KEY = process.env.REACT_APP_FB_SECRET_KEY2

    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&?key=${API_KEY}&maxResults=5`

    const searchBook = (evt) => {
        if (evt.key === "Enter") {
            axios.get(url)
                .then(res => setData(res.data.items))
                .catch(err => console.log(err))
        }
    }

    const handleSearch = (e) => {
        setData('')
        setSearch(e.target.value)
    }

    return (
        <div>
            <div className="form-container">

                <div className="quote">
                    <h1>a room without books is like  a body without a soul.</h1>
                </div>

                <div className="row2">

                    <form>
                        <div className="search">
                            <input
                                type="text"
                                placeholder="Search By Book Title"
                                value={search}
                                onChange={(e) => handleSearch(e)}
                                onKeyPress={searchBook} />
                            <Link to="/books">
                                <button
                                >
                                    <GoSearch />
                                </button>
                            </Link>

                        </div>
                    </form>

                </div>

            </div>

            < BooksPage
                book={bookData}
            />

        </div>
    )
}

export default Form