import React, { useState, useCallback } from 'react'
import Title from './Title'
import Button from './Button'
import Count from './Count'

function ParentComponent() {
    const [age, setAge] = useState(0)
    const [salary, setSalary] = useState(5000)
    const incrementCount = useCallback(() => {
        setAge(age + 1)
    }, [age])
    const incrementSalary = useCallback(() => {
        setSalary(salary + 5000)
    }, [salary])

    return (
        <div>
            <Title />
            <Count text={'Age'} count={age} />
            <Button clickHandler={incrementCount}>Increment Count</Button>
            <Count text={'Salary'} count={salary} />
            <Button clickHandler={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComponent
