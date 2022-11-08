import React from 'react'

const Consent1 = () => {
    return <div className="container">
        <h1>We value your privacy!</h1>
        <div className="content">
            <div className="textContainer">
                <p>We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read More</p>
            </div>
            <div className="buttonContainer">
                <button className="button">Accept</button>
                <button className="button">Reject</button>
            </div>
        </div>
    </div>
}

export default Consent1