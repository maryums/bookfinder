
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebaseConfig';
import { getDatabase, ref, set } from 'firebase/database';
import Card from './Card';
import { nanoid } from 'nanoid'


const BooksPage = ({ book }) => {

    // Stateful variables for user reviews
    const [nameInput, setNameInput] = useState('');
    const [reviewInput, setReviewInput] = useState('');
    const [titleInput, setTitleInput] = useState('');

    // Stateful variable for form validation failure
    const [formFail, setFormFail] = useState(false);

    const handleNameChange = (event) => {
        setNameInput(event.target.value);
    }

    const handleTitleChange = (event) => {
        setTitleInput(event.target.value);
    }
    const handleReviewChange = (event) => {
        setReviewInput(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // Check that the user has entered at least one character for their name and at least two characters for the review input
        if (nameInput.length < 1 || titleInput.length < 1 || reviewInput.length < 2) {
            setFormFail(true);
        } else {
            // Create a reference to our database
            const db = getDatabase(firebase);
            const databaseID = nanoid()

            set(ref(db, databaseID), {
                username: nameInput,
                title: titleInput,
                review: reviewInput,
            });

            setNameInput('');
            setReviewInput('');
            setTitleInput('');
            setFormFail(false);
        }
    };

    return (
        <div>
            {book.length > 1 &&

                <div className="book-container">
                    {<Card book={book} />}
                </div>
            }


            <div className="review-form">
                <h2 className="review-instructions">
                    Read any good books lately? Leave a review!
                </h2>

                <form action="" name="review-form" id="review-form">
                    <label htmlFor="name" className="sr-only">
                        Name:
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        onChange={handleNameChange}
                        value={nameInput}
                    />

                    <label htmlFor="title" className="sr-only">
                        Book Title:
                    </label>
                    <input
                        type="textarea"
                        name="title"
                        id="title"
                        placeholder="Title"
                        onChange={handleTitleChange}
                        value={titleInput}
                    />

                    <label htmlFor="review" className="sr-only">
                        Review:
                    </label>
                    <input
                        type="textarea"
                        name="review"
                        id="review"
                        placeholder="This book was..."
                        onChange={handleReviewChange}
                        value={reviewInput}
                    />

                    <button
                        onClick={handleSubmit}
                    >
                        Submit my review
                    </button>

                    {
                        formFail
                            ? <p className="review-error">Your review seems a little short! Please enter more than two characters.</p>
                            : null
                    }
                </form>
            </div>

            <div className="reviews-link-container">
                <p className="reviews-link">
                    <Link to="/reviews">See all user reviews</Link>
                </p>
            </div>


        </div>
    )
}

export default BooksPage