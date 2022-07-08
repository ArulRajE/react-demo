import React from 'react'

function Title() {
    console.log('Title Rendering');
    return (
        <div>
            useCall back
        </div>
    )
}

export default React.memo(Title)
