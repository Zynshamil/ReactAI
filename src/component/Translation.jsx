import React from 'react'

function Translation({doStuff,setInput,result}) {
  return (
    <div className='bg'>
        <textarea className='text-area' 
         cols={55}
         rows={12} 
         onChange={(e) => setInput(e.target.value)}> 
        </textarea><br>
        </br>
        <button className='action-btn' onClick={doStuff} >
            Ask me anything !
        </button>

        <h3 className='result-text' >{result.length > 0 ? result :""}</h3>
    </div>
  )
}

export default Translation