import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import './PageLayouts.css'

function PageLayouts() {
  return (
    <>


<Header />  
<div className="PageLayouts">

<Outlet />
</div>

    </>
  )
}

export default PageLayouts
