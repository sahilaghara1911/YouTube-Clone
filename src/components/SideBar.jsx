import React from 'react'

const SideBar = () => {
  return (
    <div className='p-5 w-[12rem]'>
    <div className='flex flex-col'>
    <ul className='space-y-2'>
        <li>Home</li>
        <li>Shorts</li>
        <li>Live</li>
        <li>Video</li>
      </ul>
    </div>
    <div>
    <h1 className='font-bold'>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
      <div>
      <h1 className='font-bold py-5 pt-5'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      </div>
      
    </div>
  )
}

export default SideBar