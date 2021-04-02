import React from 'react'

const NewButton=( {secondary=false,className="",children,onClick=()=>{}})=> {
    return (
        <div>
            <button className={`new-button  ${secondary?'--secondary': '--primary'}  ${className} `} onClick={onClick}>{children}</button>
        </div>
    )
}

export default NewButton
