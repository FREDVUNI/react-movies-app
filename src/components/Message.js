import React from 'react'

const Message = ({title}) =>{
    return(
        <h2 style={{ color:"#ddd", fontSize:"50px", marginTop:"200px", textAlign:"center" }}>
            {title}
        </h2>
    )
}

export default Message