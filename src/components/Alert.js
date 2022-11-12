import React from 'react'

function Alert (props) {
    const capitalize = (s) => {
      if(s==="danger"){
        s="Error";
      }
        const lowerWord = s.toLowerCase();
        return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
    }
  return (
    <div style={{height : '50px'}}>
        {props.alertText && <div className={`alert alert-${props.alertText.type} alert-dismissible fade show `}role="alert">
        <strong>{capitalize(props.alertText.type)}</strong>: {props.alertText.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>}
    </div>
  )
}

export default Alert
