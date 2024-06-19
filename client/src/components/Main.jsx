import React from 'react'
import First_section from './First_section'
import Alert from './Alert'
import Second_section from './Second_section'
import Third_section from './Third_section'
import Fourth_section from './Fourth_section'
import Fifth_section from './Fifth_section'
import Sixth_section from './Sixth_section'
import YoutubeVideos from './YoutubeVideos/YoutubeVideos.jsx'

function Main() {
  return (
    <div>
      <Alert />
      <First_section />
      <Second_section />
      <Third_section />
      <Fourth_section />
      <Fifth_section />
      <Sixth_section />
      <YoutubeVideos />
      
    </div>
  )
}

export default Main