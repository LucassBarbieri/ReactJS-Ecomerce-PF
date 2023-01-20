import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../mock/data'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

  const { id } = useParams();

  const [productos, setProductos] = useState({})
  useEffect(() => {
    getProducts().then((res) => setProductos(res.find(item => item.id === id)))
  }, [id])

  return (
    <>
      <ItemDetail productos={productos} />
    </>
  )

}

export default ItemDetailContainer;