import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'

const sides = ['one', 'two', 'three', 'four', 'five', 'six']

function roll() {
    const n = Math.floor(Math.random() * 6)
    return n
}

function Dice(props) {
    const [state, setState] = useState({ rolling: true, side: roll() })
    const side = sides[state.side]
    const diceClass = ['dice', 
        state.rolling ? 'rolling' : null].join(' ')
    const iconClass = `fa fa-dice-${side}`

    useEffect(() => {
        if (!state.rolling) {
            return
        }
        setTimeout(() => {
            setState(state => ({
                ...state,
                rolling: false
            }))
        }, 500)
    }, [state.rolling])

    const handleRoll = () => {
        if (state.rolling) {
            return
        }
        setState(state => ({
            ...state,
            side: roll(),
            rolling: true
        }))
    }

    return (
        <div className={diceClass} style={{ color: props.color }} onClick={handleRoll}>
            <i className={iconClass}></i>
            <span>{state.side + 1}</span>
        </div>
    )
}

ReactDom.render(
    <>
        <Dice color="#f44336" />
        <Dice color="#43A047" />
        <Dice color="#1E88E5" />
        <Dice color="#F9A825" />
    </>,
    document.body.firstElementChild
)