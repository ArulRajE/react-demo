import React from 'react'

function PropsDemo() {
    return (
        <div className="App">
            <Method1 name="Arul" /> {/*passing a string parameter*/}
            <Method2 rollNo={123}> {/*passing a integer parameter*/}
                <p>This child props</p>{/* passing a tag as children parameter*/}
            </Method2>
            <Method3 student={{ rollNo: 123, name: 'Arul', lang: 'React' }} />
            <Method4 /> {/* passing a method as props to child component */}
            <Method5 name={() => "Arul"} /> {/* passing a method as props to child component */}
        </div>
    )
}

function Method1(props) { //receiving a props
    return (
        <React.Fragment>
            <span>Welcome {props.name}</span><br /><br />
        </React.Fragment>
    )
}
function Method2({ rollNo, children }) { //destructuring the props
    return (
        <React.Fragment>
            <span>My Roll Number: {rollNo}</span>
            {children}
        </React.Fragment>
    )
}
function Method3({ student }) {
    const { rollNo, name, lang } = student //destructuring the props
    return (
        <React.Fragment>
            <span>My Roll No: {rollNo}</span>
            <span>Name: {name}</span>
            <span>Lang: {lang}</span><br /><br />
        </React.Fragment>
    )
}

function Method4() {

    function ParentComponent() {
        const DisplayAlertBox = props => { /* this is Parent Component method */
            alert(`Hello Parent Component from ${props}`)
        }
        return (
            <ChildComponent Display={DisplayAlertBox} /> //Passing a parent component method as props to child component
        )
    }

    function ChildComponent(props) {
        return (
            <><div>Passing a method ad props to child Comp</div>
                <button type="button" onClick={() => props.Display('child')}>Display AlertBox</button> {/*calling a parent component method */}
            </>
        )
    }

    return (
        <>
            <ParentComponent />
        </>
    )
}
function Method5(props) {
    return <h1>{props.name()}</h1>
}

export default PropsDemo
