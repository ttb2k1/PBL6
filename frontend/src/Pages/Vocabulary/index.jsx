import React from 'react'
import Header from '../../Components/Header'
import Search from '../../Components/Search';
import './search.scss'

const Vocabulary = () => {
  return (
    <div className='vocabContainer'>
      <Header />
      <Search />
    </div>
  )
}

export default Vocabulary