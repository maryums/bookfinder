import React, { useState, useEffect, useRef } from 'react'
import { Navigate, Link, Redirect } from 'react-router-dom';
import Card from './Card';
import axios from 'axios';
import { GoSearch } from 'react-icons/go';
import BooksPage from './BooksPage';

const Form = () => {

    const [search, setSearch] = useState("")

    const [bookData, setData] = useState([])

    const API_KEY = //enter API key

    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&?key=${API_KEY}&maxResults=5`

    const searchBook = (evt) => {
        if (evt.key === "Enter") {
            axios.get(url)
                .then(res => setData(res.data.items))
                .catch(err => console.log(err))
        }
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
                            onChange={e => setSearch(e.target.value)}
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