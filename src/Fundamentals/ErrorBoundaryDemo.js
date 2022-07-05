import React, { Component } from 'react'

// Error Handling Example

class ErrorBoundaryDemo extends Component {
    render() {
        return (
            <>
                <ErrorBoundary>
                    <Hero heroName="Arul" />
                    <Hero heroName="Jocker" />
                </ErrorBoundary>
            </>
        )
    }
}

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);
    }
    render() {
        if (this.state.hasError) {
            return <h1>Something is wrong</h1>
        }
        else
            return this.props.children
    }
}

function Hero({ heroName }) {
    if (heroName === 'Joker') {
        throw new Error('not a hero')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default ErrorBoundaryDemo
