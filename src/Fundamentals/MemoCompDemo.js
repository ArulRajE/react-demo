import React from 'react'

function MemoCompDemo({ name }) {
    console.log('-------Memo Component Rendering----------')
    return (
        <div>
            Memo Component Rendering {name}
        </div>
    )
}


export default React.memo(MemoCompDemo)
