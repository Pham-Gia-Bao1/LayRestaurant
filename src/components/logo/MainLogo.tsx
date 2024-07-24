import React from 'react'
import Logo from "../../assets/images/LOGO 1 (1).png"
import Image from 'next/image'
export default function MainLogo() {
  return (
    <div>
         <Image className='w-32' src={Logo} alt='main logo' />
    </div>
  )
}
