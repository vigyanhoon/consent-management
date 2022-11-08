import React from 'react'
import { useState } from 'react'

import Consent1 from "./consent1/consent1"

const App = () => {
    const [shown, setShown] = useState(true)

    return <>
        {shown && <Consent1 setShown={setShown} />}
        {!shown && <button className="revisit" onClick={() => setShown(true)}>
            <img src="https://cdn-cookieyes.com/assets/images/revisit.svg" />
        </button>}
    </>
}

export default App