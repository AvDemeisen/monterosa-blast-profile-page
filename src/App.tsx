import { useState } from 'react'
import Header from './components/header'
import Main from './components/main'
import { Wrapper } from './App.styles'

function App() {

const [profile, setProfile] = useState({
  avatar: 'https://dummyimage.com/300/fff/aaa',
  name: 'some name',
  description: 'some description'
})
  return (
    <Wrapper>
      <Header data={profile} setMethod={setProfile}/>
      <Main />
    </Wrapper>
  )
}

export default App
