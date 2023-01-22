import { useState } from 'react'
import Theme from './utils/Theme'
import React from 'react'
import Header from './components/layout/Header'
import ProjectsCatalogue from './components/main/ProjectsCatalogue'


function App() {
  return (
    <React.Fragment>
      <Theme>
        <Header/>
        <ProjectsCatalogue/>
        h
      </Theme>
    </React.Fragment>
  )
}

export default App
