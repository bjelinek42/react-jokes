import React from 'react'
import './style.css'
import Joke from './joke'

export default function App() {
  return (
    <div>
      <Joke setUp='This is a setup 1.' punchLine='This is a punchline! 1' />
      <Joke setUp='This is a setup 2.' punchLine='This is a punchline! 2' />
      <Joke setUp='This is a setup 3.' punchLine='This is a punchline! 3' />
      <Joke setUp='This is a setup 4.' punchLine='This is a punchline! 4' />
      <Joke setUp='This is a setup 5.' punchLine='This is a punchline! 5' />
      <Joke punchLine='This is a punchline! 6.' />
    </div>
  )
}

