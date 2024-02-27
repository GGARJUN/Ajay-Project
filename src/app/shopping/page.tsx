import React from 'react'
import { DashboardNav } from '../dashboard/DashboardNav'
import { FooterLast } from '../hero/FooterLast'

export default function page  ()  {
  return (
    <>
        <DashboardNav/>
        <div className='mt-20 text-center'>
            <h1>Shopping Page</h1>
        </div>
        <FooterLast/>
    </>

  )
}
