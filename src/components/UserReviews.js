import firebase from '../firebaseConfig';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDatabase, ref, onValue } from 'firebase/database';

const UserReviews = () => {
    const [reviews, setReviews] = useState([]);

    // Side effect for pushing reviews into state
    useEffect(() => {
        // Create a variable that holds our database details
        const database = getDatabase(firebase);
        // Create a variable that makes a reference to our database
        const dbRef = ref(database);
        // Add an event listener to the variable that will fire from the database, naming the data we get back "response"
        onValue(dbRef, (response) => {
            // Create a variable to store the new state to our app
            const newState = [];

            // Store the response values from our onValue return
            const data = response.val();
            console.log(data)

            // Push each review to our new state array
            for (let key in data) {
                // Inside our loop, we will push each review into the newState array
                newState.push({
                    key: key,
                    title: data[key].title,
                    username: data[key].username,
                    review: data[key].review,

                });
            }
            // Call setReviews and update our state to be the new array
            setReviews(newState);
        });
    }, [])

    console.log(reviews)

    return (
        <section className="review-page">
            <h2>What people are saying about...</h2>

            <div className="reviews-container">
                {reviews.map((reviewObject) => {
                    return (
                        <div key={reviewObject.key}>
                            <h3>{reviewObject.title}</h3>
                            <p>"{reviewObject.review}"</p>
                            <p className="reviewer-name">
                                - {reviewObject.username}
                            </p>
                        </div>
                    );
                })}
            </div>

            <div className="back-to-homepage">
                <Link to="/">Back</Link>
            </div>
        </section>
    );
};

export default UserReviews;