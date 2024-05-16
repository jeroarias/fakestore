import React from 'react'

export const Header = ({children}) => {
  return (

    <header className= 'flex justify-between bg-[#ECE3CE] w-full h-[8rem] p-[4rem]'>
        {children}
    </header>
  )
}
