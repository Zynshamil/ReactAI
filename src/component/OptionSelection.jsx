import React from 'react'

function OptionSelection({ arrayItems }) {
  return (
  <>

    <h1 className='heading'>React AI</h1>
    
    <div className='grid-main'>

      {arrayItems.map((item)=> {
       return (
        
       <div className='grid-child'>
       <h4>{item.name}</h4>
       <p>{item.description}</p>
       </div>
       );
      })} 
    </div>
  </>
  );
}

export default OptionSelection