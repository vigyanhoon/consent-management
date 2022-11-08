import React, { useState } from 'react'

const Consent1 = ({ setShown }) => {
    const initialSelected = Boolean(localStorage.getItem('checked') === "true")

    const [selected, setSelected] = useState(initialSelected)

    const hide = () => {
        setShown(false)
    }

    const onSelect = (e) => {
        const checked = e.target.checked
        localStorage.setItem('checked', checked);
        setSelected(checked)
    }

    return <div className="container">
        <h1>We value your privacy!</h1>
        <div className="content">
            <div className="textContainer">
                <p>We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read More</p>
            </div>
            <div className="switch">
                <label htmlFor="html">Select All</label>
                <input type="checkbox" id="accept" checked={selected} onChange={onSelect} />
            </div>
        </div>
        <div className="buttonContainer">
            <button className="button" onClick={hide}>Save</button>
        </div>
    </div>
}

export default Consent1