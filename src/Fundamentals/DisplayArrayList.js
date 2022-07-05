import React from 'react'

function DisplayArrayList() {

    return (
        <div className="App">
            <Method1 />
            <Method2 />
            <Method3 />
        </div>
    )
    function Method1() {

        const name = ['arul', 'raj', 'sriram']

        return (
            <React.Fragment>
                Name List 1
                <h1>{name[0]}</h1>
                <h1>{name[1]}</h1>
                <h1>{name[2]}</h1>
            </React.Fragment>
        )
    }

    function Method2() {

        const names = ['vasu', 'ramu', 'mani']

        return (
            <React.Fragment>
                Name List 2{
                    names.map((name, index) => <h1 key={index}>{name}</h1>)
                }
            </React.Fragment>
        )
    }

    function Method3() {

        const name = ['abc', 'xyz', 'mnlo']
        const nameList = name.map((name, index) => <h1 key={index}>{name}</h1>)

        return <div>{nameList}</div>

    }

}

export default DisplayArrayList
