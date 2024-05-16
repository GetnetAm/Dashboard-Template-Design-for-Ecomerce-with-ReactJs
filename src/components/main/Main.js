import React from 'react'
import "./Main.css"
import PageTitle from '../page-title/PageTitle'
import Dashboard from '../dashboard/Dashboard'

function Main() {
  return (
    <main id='main' className='main'>
        <PageTitle page="Dashboard" />
        <Dashboard />

    </main>
  )
}

export default Main
