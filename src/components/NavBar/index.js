import React from 'react'
import { Nav, Link } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const ZISE = '32px'

export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'><MdHome size={ZISE} /></Link>
      <Link to='/favs'><MdFavoriteBorder size={ZISE} /></Link>
      <Link to='/user'><MdPersonOutline size={ZISE} /></Link>
    </Nav>
  )
}
