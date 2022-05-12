import React from 'react'
import { FaTimes } from 'react-icons/fa';

const Modal = ({ show, item, onClose }) => {
    if (!show) {
        return null;
    }
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

    return (
        <div>

            <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" onClick={onClose}>  <FaTimes /></button>
                    <div className="inner-box">
                        <img src={thumbnail} alt="" />
                        <div className="info">
                            <h1>{item.volumeInfo.title}</h1>
                            <h3>{item.volumeInfo.authors[0]}</h3>
                            <h4>{item.volumeInfo.publisher} /  <span>{item.volumeInfo.publishedDate}</span></h4 ><br />
                            <a href={item.volumeInfo.previewLink}><button>Google Books Page</button></a>
                        </div>
                    </div>
                    <h4 className="description">{item.volumeInfo.description}</h4>
                </div>
            </div>

        </div>
    )
}

export default Modal