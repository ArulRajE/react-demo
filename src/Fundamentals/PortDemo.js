import React, { Component } from 'react'
import ReactDom from 'react-dom'

function PortDemo() {
    return ReactDom.createPortal(
        <h1>Portal Demo</h1>,
        document.getElementById('portal-root')
    )
}
export default PortDemo