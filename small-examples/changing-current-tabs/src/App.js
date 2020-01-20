import React, { useState, useEffect } from 'react'
import './App.css'
import Images from './assets/images'

function App() {

  // state
  const [tabActive, setTabActive] = useState()
  const [status, setStatus] = useState()
  
  // component mount
  useEffect( () => {
    setTabActive('home')
    setStatus('This is home...')
  },[ setTabActive ])

  // logic
  const navigate = (location) => {
    
    // set the image
    setTabActive(location)

    // set text status
    if (location === 'home') {
      setStatus('This is home...')
    } else if (location === 'comments') {
      setStatus('This is comments tab...')
    } else if (location === 'contact') {
      setStatus('This is contact tab...')
    } else {
      setStatus('This is home...')
    }

  }

  return (
    <div className="App">
      <div className="flex-row">
        <div className="flex-col"
          onClick={ (e) => navigate('home') }
        >
          <img 
            alt="" 
            src={ tabActive === 'home' ? Images.homeActive : Images.home }
          />
        </div>
        <div className="flex-col"
          onClick={ (e) => navigate('comments') }
        >
          <img
            alt=""
            src={ tabActive === 'comments' ? Images.commentsActive : Images.comments }
          />
        </div>
        <div className="flex-col"
          onClick={ (e) => navigate('contact') }
        >
          <img
            alt=""
            src={ tabActive === 'contact' ? Images.contactActive : Images.contact }
          />
        </div>
      </div>
      <p>{ status }</p>
    </div>
  )
}

export default App
