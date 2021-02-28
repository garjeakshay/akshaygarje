import React from 'react'
import TypeWriter from 'typewriter-react'

export class TypeIt extends React.Component {
  render() {
    return <TypeWriter 
      input={[
        "Hey, Vidya!",
        {"pause": 10},
        " I am Sorry 😥",
        {"pause": 5},
        "& I Love You 🧡"
      ]}
      
      speed={75}
      cursor={true}
      cursorChar="|"
    />
  }
}