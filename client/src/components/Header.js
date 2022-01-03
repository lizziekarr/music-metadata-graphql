import React from 'react'

export const Header = () => {

    const headerStyle = {
        width: '100%',
        padding: '2%',
        backgroundColor: "#3236AF",
        color: 'white',
        textAlign: 'center'
    }

    return(
        <div style={headerStyle}>
            <h1>Music Metadata</h1>
        </div>
    )
}