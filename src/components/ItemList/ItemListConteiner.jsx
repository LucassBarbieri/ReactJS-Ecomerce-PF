import React, { useState, useEffect } from 'react'
import { getProducts } from '../../mock/data'
import ItemList from '../ItemList/ItemList'

const ItemListConteiner = () => {

  const [productos, setProductos] = useState([])
  
  useEffect(() => {
    getProducts()
      .then((res) => setProductos(res))
  }, [])

  return (
    <>
      <ItemList productos={productos} />
    </>
  )

}

export default ItemListConteiner