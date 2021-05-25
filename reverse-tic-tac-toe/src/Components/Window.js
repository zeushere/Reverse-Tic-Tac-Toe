import React from 'react'

export default function Window(props) {
    const classes = props.className?`${props.className} square` : `square`
    return (
     <span onClick = {props.onClick} className = {classes}>{props.state}</span>
    )
}
