import React, { Component } from 'react'

class RefsDemo extends Component {

    render() {
        return (
            <>
                {/* <Refs/> */}
                {/* <CallBackRefs /> */}
                {/* <ComponentRef/> */}
                <FRefInput />
            </>
        )
    }
}

class Refs extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
    }
    componentDidMount() {
        this.inputRef.current.focus()
    }
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <>
                <input type="text" ref={this.inputRef} />
                <button type="button" onClick={this.clickHandler}>click</button>
            </>
        )
    }
}

class CallBackRefs extends Component {
    constructor(props) {
        super(props)

        this.cbRefs = null
        this.setCbRefs = element => {
            this.cbRefs = element
        }

    }
    componentDidMount() {
        if (this.cbRefs) {
            this.cbRefs.focus()
        }
    }
    clickHandler = () => {
        alert(this.cbRefs.value)
    }
    render() {
        return (
            <>
                <input type="text" ref={this.setCbRefs} />
                <button type="button" onClick={this.clickHandler}>Click</button>
            </>
        )
    }
}

class ComponentRef extends Component {
    constructor(props) {
        super(props)

        this.ComponentRef = React.createRef()
    }

    clickHandler = () => {
        this.ComponentRef.current.focusInput()
    }
    render() {
        return (
            <>
                <Input ref={this.ComponentRef} />
                <button type="button" onClick={this.clickHandler}>Focus</button>
            </>
        )
    }
}

class Input extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
    }
    focusInput = () => {
        this.inputRef.current.focus()
    }
    render() {
        return (
            <>
                <input type="text" ref={this.inputRef} />

            </>
        )
    }
}

class FRefInput extends Component {
    constructor(props) {
        super(props)

        this.FRInputRefs = React.createRef()
    }
    clickHandler = () => {
        this.FRInputRefs.current.focus()
    }

    render() {
        return (
            <>
                <FRInput ref={this.FRInputRefs} />
                <button type="button" onClick={this.clickHandler}>Focus Text</button>
            </>
        )
    }
}

const FRInput = React.forwardRef((props, ref) => {
    return (
        <>
            <input type="text" ref={ref} />
        </>
    )
})

export default RefsDemo
