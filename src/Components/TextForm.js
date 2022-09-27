import React,{useState} from 'react'

export default function TextForm(props) {
    let [Text,setText] = useState("Enter some text");
    let handleonclick1 = (event)=>
    {
        let temp=Text.toUpperCase();
        setText(temp);
    }
    let handleonclick2 = (event)=>
    {
        let temp=Text.toLowerCase();
        setText(temp);
    }
    let handleonclick3 = (event)=>
    {        
        setText('');
    }
    let handleonchange = (event)=>
    {
        console.log("onchange called");
        setText(event.target.value);
    }
    return (
        <>
        <div>
            <h1>{props.title}</h1>
            <div className="mb-3">               
                <textarea className="form-control" value={Text} onChange={handleonchange}  id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button type="button" onClick={handleonclick1} className="btn btn-primary ms-2">Convert to Uppercase</button>
            <button type="button" onClick={handleonclick2} className="btn btn-primary ms-2">Convert to Lowercase</button>
            <button type="button" onClick={handleonclick3} className="btn btn-primary ms-2">Clear</button>
        </div>
        <div className='container'>
            <p>{Text.split(" ").length} words {Text.length} characters</p>
            <h2>Preview</h2>
            <p>{Text}</p>
        </div>
        </>
    )
}
