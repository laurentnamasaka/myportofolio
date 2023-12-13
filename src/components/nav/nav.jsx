import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GiWhiteBook} from 'react-icons/gi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageRounded} from 'react-icons/bi'


const Nav = () => {
  return (
    <nav>
      <a href='Home'><AiOutlineHome/></a>
      <a href='About'><AiOutlineUser/></a>
      <a href='Experience'><GiWhiteBook/></a>
      <a href='Services'><RiServiceLine/></a>
      <a href='Contacts'><BiMessageRounded/></a>

    </nav>
  )
}

export default Nav