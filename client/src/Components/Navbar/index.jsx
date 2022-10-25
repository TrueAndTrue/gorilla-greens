import './styles.css'
import gorilla from '../../assets/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';
import { CartMenu } from '../CartMenu/index'

export const Navbar = () => {

  const products = ['Greenrose', 'Violet', 'H27']
  const [filteredProducts, setFilteredProducts] = useState([products])


  return (
    <div className="navbar-container">
      <div className="left-side">
        <img className="logo" src={gorilla} alt="gorilla logo"/>
        <Link className="nav-item" to="/"> Home </Link>
        <Link className="nav-item" to="/about"> About </Link>
        <Link className="nav-item" to="/products"> Products </Link>
        <Link className="nav-item" to="/contact"> Contact </Link>
      </div>
      <div className="right-side">
        <SearchIcon sx={{ color: 'white' }}/>
        <CartMenu />
      </div>
      
    </div>
  )
}