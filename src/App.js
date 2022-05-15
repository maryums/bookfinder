import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Form from "./components/Form";
import UserReviews from './components/UserReviews'
import BooksPage from './components/BooksPage'
import { MdRateReview } from 'react-icons/md';



function App() {

  return (
    <div className="App">

      <div className="wrapper">
        <header>
          <Link to="/">
            <h1 className="heading">
              athenaeum</h1>
          </Link>

          <div className="about-container">
            <p>
              It's overwhelming to start on a new book sometimes. The athenaeum app helps you search, rate and read reviews other users have left for books!
            </p>
            <p>
              So go ahead, search and find a new book & leave a review if you've read it!
            </p>
            <div className="header-link-container">
              <p>
                <Link to="/reviews">  See all user submitted reviews  <MdRateReview /> </Link>
              </p>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/reviews" element={<UserReviews />} />
        </Routes>
      </div>

      <footer>
        <p>
          Built by Maryum Siddiqui
        </p>
        <p>
          Data provided by Google Books APIs

        </p>

      </footer>

    </div>
  );
}

export default App;
