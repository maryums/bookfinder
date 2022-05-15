import React, { useState } from 'react'
import Modal from './Modal';

const Card = ({ book }) => {

    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState('');


    return (
        <div>
            {
                book.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    if (thumbnail !== undefined) {
                        return (
                            <>
                                <div className="card"
                                    key={item.id}
                                    onClick={() => {
                                        setShow(true);
                                        setItem(item)
                                    }}>
                                    <img src={thumbnail} alt="" />
                                    <div className="bottom">
                                        <h3 className="title">{item.volumeInfo.title}</h3>

                                    </div>

                                </div>

                                <Modal
                                    show={show}
                                    item={bookItem}
                                    onClose={() => setShow(false)}
                                />

                            </>
                        )
                    }

                })
            }

        </div>
    )
}

export default Card