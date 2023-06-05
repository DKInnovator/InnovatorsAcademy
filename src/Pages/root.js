import React from 'react'
import Header from '../Components/header';
import { Outlet } from 'react-router-dom';
const Root = () => {
  return (
    <>
      <Header />
    <div>root</div>
    <Outlet />
    </>
    
  )
}

export default Root;