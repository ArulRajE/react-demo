import React from 'react'
import './myStyle.css' // Importing stylesheet 
import styles from './moduleStyling.module.css'; // Import css modules stylesheet as styles


function Stylesheet() {

    return (
        <div>
            <InLine />
            <ObjectStyle />
            <UseExternalStyle />
            <ModuleStyling />
        </div>
    )
}

function InLine() {

    /* 
    Inline CSS Syntax
    <HTMLTag style = {{ property:value }} ></HTMLTag> 
    Note: property should be in camelCase. Use backgroundColor instead of background-color
    */

    return <h1 style={{ color: "Orange" }}>Inline Styling</h1>
}

function ObjectStyle() {

    // You can also create an object with styling information, and refer to it in the style attribute: 

    const myStyle = {
        color: "yellow",
        fontSize: "72px"
    }

    return <h1 style={myStyle}>Objet Styling</h1>
}

function UseExternalStyle() {

    // You can write your CSS styling in a separate file, just save the file with the .css file extension, and import it in your application.

    return <h1 className="green-color">External Styling</h1>
}

function ModuleStyling() {
    // css stylesheet fileName should save fileName.module.css
    /* why we use css module style 
    because if we imported css file in parent component, 
    we can also use style in child component without importing the file in child component  */
    return <h1 className={styles.success}>CSS Module Styling</h1>
}

export default Stylesheet
