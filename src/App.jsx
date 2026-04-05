import React from "react"
import Section1 from './component/Section1/section1'
import Section2 from "./component/Section2/section2"
const App = ()=>{
  const user = [
    {
      img : 'https://images.pexels.com/photos/7222276/pexels-photo-7222276.jpeg',
      intro : '',
      color : 'grey',
      tag : 'Satisfied'
    },
    {
      img : 'https://images.pexels.com/photos/3779414/pexels-photo-3779414.jpeg',
      intro : '',
      color : 'green',
      tag : 'Underserved'
    },
    {
      img : 'https://images.pexels.com/photos/23496922/pexels-photo-23496922.jpeg',
      intro : '',
      color : 'blue',
      tag : 'Underbanked'
    }
  ]
  return (
    <div>
      <Section1 user = {user}/>
      <Section2/>
    </div>
  )
}

export default App