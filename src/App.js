import './App.css'
import Header from './components/Header'
import Category from './components/Category'
import Button from './components/Button'
import { useState, useEffect } from 'react'
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY;

const App = () => {

  return ( 
    <div className='site-container'>
      <Header/>

      <Category name='Clothes'/>

      <Button className='add-wish' name='Add Wishlist'/>
    </div>
  );
}

export default App;
