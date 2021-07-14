import React from 'react'
import "./Input.css"

function Input(props) {

    const { variant = 'large', children, ...rest } = props
    return (
        <div>
            <form>
                <p>Enter:</p>
                <input className={`input ${variant}`} {...rest} />
            </form>
        </div>
    )
}

export default Input
