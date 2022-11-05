import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/noteContext'

const About = () => {
    const a = useContext(noteContext)
  return (
    <div>
      <h1>This about{a.name}</h1>
    </div>
  )
}

export default About
