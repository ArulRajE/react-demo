import React, { Component } from 'react'
import './App.css'
class Approach1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "hello world"
        }
    }

    changeText(){
        this.setState({message:"good bye"})
    }
    render() {
        return (
            <React.Fragment>
                <span>{this.state.message}</span><br/>
                <button type="button" onClick={this.changeText.bind(this)}>Change Text</button><br/> {/* Binding the event in Render, Note: this approach is not recommended  */}
            </React.Fragment>

        )
    }
}
class Approach2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "hello world"
        }
    }
    
    changeText(){
        this.setState({message:"good bye"})
    }

    render() {
        return (
            <React.Fragment>
                <span>{this.state.message}</span><br/>
                <button type="button" onClick={()=> this.changeText()}>Change Text</button><br/> {/* Event binded in arrow function in the callback, Note: this approach is not recommended by react */}
            </React.Fragment>

        )
    }
}
class Approach3 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "hello world"
        }
    this.changeText=this.changeText.bind(this) /* Event binded in constructor, Note: this approach recommended by react */
    }

    changeText(){
        this.setState({message:"good bye"})
    }
    render() {
        return (
            <React.Fragment>
                <span>{this.state.message}</span><br/>
                <button type="button" onClick={this.changeText}>Change Text</button><br/>
            </React.Fragment>

        )
    }
}
class Approach4 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "hello world"
        }
    }

    changeText =()=>{
        this.setState({message:'good bye'})
    }
    render() {
        return (
            <React.Fragment>
                <span>{this.state.message}</span><br/>
                <button type="button" onClick={this.changeText}>Change Text</button> {/*Event binded  */}
            </React.Fragment>

        )
    }
}

class EventBind extends Component {
    render() {
        return (
            <div className="App">
               <Approach1/> 
               <Approach2/> 
               <Approach3/> 
               <Approach4/> 
            </div>
        )
    }
}

export default EventBind
