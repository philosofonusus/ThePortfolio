import React from 'react'
import '../styles/loading.min.css'
export const Loader = () => {
    return(
        <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)"
        }}>
            <div className="lds-ring"><div /><div /><div /><div /></div>
        </div>
    )
}