import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col p-2 m-2 '>
        <div className='flex col-span-1 gap-5'>
            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEX///8AAACOjo7CwsItLS3c3Nw/Pz/6+vrGxsaSkpKZmZmIiIjy8vK+vr7w8PA4ODgfHx+3t7fi4uKY3kT7AAAAzklEQVR4nO3byQ3CQAxA0TGQDQhZ+i+WHCiAi2UU3uvga6Q52HJrAAAAAAAAAAAAAAAAAAAAAAA/4N7fKvX37MBHVHskF1b3HXIDn9V5h2du4lrdF2tuYOuqA6NLLmzDeK00DtmBAAAAAAB8dNOl0pQ+8p6rh/oxJxdW90X2du1VnXd45SZW50X2G7atui+25MLz/6UAAAAAAHyc/t5irx7qx55cuFQHxpIb+Ae3a9V5kb5dO/8N6fnvgAEAAAAAAAAAAAAAAAAAAAAAvvEGU4ASPASDdpgAAAAASUVORK5CYII=' className='h-8'/>
            <img src='https://ongpng.com/wp-content/uploads/2023/04/3-13.png' className='h-8 mx-2'/>
        </div>
        <div className='col-span-10 text-center mr-20'>
            <input type='text' className='w-1/2 border-gray-700 border rounded-l-md py-1'/>
            <button className='border py-1 rounded-r-full border-gray-700 px-5'>Search</button>
        </div>
        <div className='col-span-1'>
            <img src='https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' className='h-8'/>
        </div>
    </div>
  )
}

export default Head