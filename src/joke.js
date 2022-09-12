import React from 'react'
import './style.css'

export default function Joke(props) {
  console.log(props)
  return (
    <div>
      {props.setUp && <h1>Setup: {props.setUp}</h1>}
      <h2>Punchline: {props.punchLine}</h2>
      {props.isPun && <h3>This joke is a pun!</h3>}
      <h4>Upvotes = {props.upvotes}</h4>
      {props.comments && props.comments.forEach(comment => {
        <h4>{comment}</h4>
      })}
    </div>
  )
}