import React from 'react'

function FragmentDemo() {

    return (<React.Fragment>
        <Method1 />
        <Method2 />
        <Method3 />
        <Method4 />
    </React.Fragment>
    )
}

function Method1() {

    return (
        <React.Fragment>
            <h1>React Fragment</h1>
            <p>this describes the React Fragment</p>
        </React.Fragment>
    )
}

function Method2() {

    return (
        // short form of React Fragment
        <>
            <h1>React Fragment</h1>
            <p>this describes the React Fragment</p>
        </>
    )
}

function Method3() {

    function Table() {

        return (
            <React.Fragment>
                <table>
                    <tbody>
                        <tr>
                            <Columns />
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        )
    }

    function Columns() {

        return (
            <React.Fragment>
                <td>Arul</td>
                <td>Raj</td>
            </React.Fragment>
        )
    }
    return <Table />
}

function Method4() {

    const studentList = [{ id: 0, name: 'arul' }, { id: 1, name: 'Raj' }]

    return (
        // Note only key attribute can use in Fragment
        <React.Fragment>{
            studentList.map(list => (
                <React.Fragment key={list.id}>
                    {list.name}
                </React.Fragment>
            ))
        }</React.Fragment>
    )
}

export default FragmentDemo
