import React from 'react'
import "./List.scss"
import Card from '../Card/Card'
import Loading from '../Loading/Loading'

function ProductList({list, loader}) {

  if(loader) {
    return <Loading/>
  }
  
  return (
    <div className='list'>
      {
        list.map((item) => (
          <Card key={item.id} data={item} />
        ))
      }
    </div>
  )
}

export default ProductList
