import React from 'react'

function Level({activeLevel}) {
    return (
        <>
            <p className="story">{activeLevel.text}!</p><br />
            <img id={activeLevel.imageID} className="story-img scroll" src="https://via.placeholder.com/150?text=2x2+scroll" alt="scroll" />
            <br /><br />
            <p className="help-text">Use the code editor to move the scroll into your inventory</p>
        </>
    )
}

export default Level;