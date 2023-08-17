import React,{useState} from 'react'

const TextForm = (props) => {

    const [text,setText]=useState('Enter text here')

    let handleUpperCase=()=>{
        setText(text.toUpperCase())
    }
    let handleLowerCase=()=>{
        setText(text.toLowerCase())
    }
    let handleClear=()=>{
        setText('')
    }
    let handleChange=(event)=>{
        setText(event.target.value)
    }

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpperCase}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleLowerCase}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleClear}>Clear Text</button>
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} charecters</p>
        <p>{0.008* text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}

export default TextForm