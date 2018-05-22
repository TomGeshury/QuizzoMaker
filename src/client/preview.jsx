import React from 'react';

const Preview = (props) => (
  
  (props.file) ?
    <div>
      {console.log(props)}
      <img style={{width: '196px', height: '196px'}} src={props.file.preview}/>
    </div> : <div>{props.text}</div>
);