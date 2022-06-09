import React, { useState } from 'react'

export default function TextForm(props) {
    if (props.mode === 'light')
        document.body.style.backgroundColor = 'rgb(174, 245, 244)';
    const [text, setText] = useState("");
    const GoUppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const GoLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const ClearAll = () => {
        setText("");
    }
    const handleOnchange = (event) => {

        setText(event.target.value);
    }
    var x = 0;
    if (text.length == 0)
        x = 1;
    else
        x = 0;
    var y = 0;
    if (text[text.length - 1] == ' ')
        y = 1;
    else
        y = 0;

    return (
        <>
            <div className='Container'>
                <div className={`mb-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <label htmlFor="myBox" className="form-label"><h1>{props.heading}</h1></label>
                    <textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <button className="btn btn-primary" style={{ backgroundColor: props.mode === 'light' ? 'rgb(84, 156, 17)' : 'rgb(214, 160, 21)', borderColor: 'black' }} id="1" onClick={GoUppercase}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-2" style={{ backgroundColor: props.mode === 'light' ? 'rgb(84, 156, 17)' : 'rgb(214, 160, 21)', borderColor: 'black' }} id="2" onClick={GoLowercase}>Convert To LowerCase</button>
                <button className="btn btn-primary" style={{ backgroundColor: props.mode === 'light' ? 'rgb(84, 156, 17)' : 'rgb(214, 160, 21)', borderColor: 'black' }} id="3" onClick={ClearAll}>Clear Input</button>
            </div>
            <div className={`Container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h2>Your text summary</h2>

                <p><i>{text.split(/\s+/).length - x - y} words and {text.length} characters</i></p>
                <p><i>Takes {0.008 * (text.split(/\s+/).length - x - y)} minutes to read</i></p>
                <br />
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter some text to preview"}</p>
            </div>
        </>
    )
}
