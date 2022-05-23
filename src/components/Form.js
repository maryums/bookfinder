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

    const searchBook = (e) => {
        if (e.key === "Enter") {
            axios.get(url)
                .then(res => setData(res.data.items))
                .catch(err => console.log(err))
            handleReset()
        }

    }

    const handleReset = () => {
        setSearch('')
    }

    return (
        <div>
            <div className="form-container">

                <div className="quote">
                    <h1>a room without books is like  a body without a soul.</h1>
                </div>

                <div className="row2">


                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyPress={searchBook} />
                        <Link to="/books">
                            <button
                            >
                                <GoSearch />
                            </button>
                        </Link>
                    </div>

                </div>

            </div>

            < BooksPage
                book={bookData}
            />

        </div>
    )
}

export default Form