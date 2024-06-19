import React from 'react'
import Header from '../Header'
import Footer_section from '../Footer_section'
import { Outlet } from 'react-router-dom'

function CommonComponents() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer_section />
    </>
  )
}

export default CommonComponents
