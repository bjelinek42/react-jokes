import React from 'react'
import './style.css'

export default function Joke(props) {
  console.log(props)
  return (
    <div>
      {props.setUp && <h1>Setup: {props.setUp}</h1>}
      <h2>Punchline: {props.punchLine}</h2>
    </div>
  )
}