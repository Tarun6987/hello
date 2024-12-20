import React, { useState } from 'react';
function InputField() {
    const [inputvalue, setinputvalue] = useState('');
    const handleinput = (event) => setinputvalue(event.target.value);
    return (
        <div className="container mt-5">
            <div className="pt-5  pb-3 shadow-lg text-center">
                <input type="text" value={inputvalue} onChange={handleinput}></input>
                <p><b>{inputvalue || "Start typing to see the live text!"}</b></p>
            </div>
        </div>
    )
}
export default InputField