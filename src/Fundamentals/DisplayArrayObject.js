import React from 'react'

function DisplayArrayObject() {
    return (
        <div className="App">
            <Method1 />
            <Method2 />
        </div>
    )
}

function Method1() {
    const student = [
        {
            id: 1,
            name: "raj",
            age: 26,
            language: "React Js"
        },
        {
            id: 2,
            name: "Srikanth",
            age: 21,
            language: "Node Js"
        },
        {
            id: 3,
            name: "Sriram",
            age: 45,
            language: "Angular"
        }
    ]
    const studentList = student.map((list, key) => {
        <h1 key={list.id}>
            Student Name :{list.name} Age: {list.age} language: {list.language}
        </h1>

    })

    return (<div>{studentList}</div>)

}

function Method2() {

    const persons = [
        {
            name: 'Brue',
            age: '18',
            lag: 'React'
        },
        {
            name: 'Raj',
            age: '21',
            lag: 'Angular'
        },
        {
            name: 'ram',
            age: '23',
            lag: 'Vue'
        },
    ]
    const PersonList = persons.map(person => <Person key={person.name} person={person} />)

    return (
        <div>
            {PersonList}
        </div>
    )

}

function Person({ person }) {
    const { name, age, lag } = person
    return (
        <div>
            <h2>
                im {name} and im {age} old and i know {lag}
            </h2>
        </div>
    )
}

export default DisplayArrayObject
