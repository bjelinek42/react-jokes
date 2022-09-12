import React from 'react'
import './style.css'
import Joke from './joke'

export default function App() {
  return (
    <div>
      <Joke setUp='This is a setup 1.' punchLine='This is a punchline! 1' isPun={true} upvotes={10} comments={['Stop', 'Collaborate', 'And', 'Listen']} />
      <Joke setUp='This is a setup 2.' punchLine='This is a punchline! 2' isPun={true} upvotes={12} />
      <Joke setUp='This is a setup 3.' punchLine='This is a punchline! 3' isPun={false} upvotes={16} />
      <Joke setUp='This is a setup 4.' punchLine='This is a punchline! 4' isPun={true} upvotes={34} />
      <Joke setUp='This is a setup 5.' punchLine='This is a punchline! 5' isPun={false} upvotes={4} />
      <Joke setUp={true} punchLine='This is a punchline! 6.' />
      <Joke punchLine={true} />
    </div>
  )
}

