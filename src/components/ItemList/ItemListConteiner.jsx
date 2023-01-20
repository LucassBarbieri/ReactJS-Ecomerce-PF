import React, { useState, useEffect } from 'react'
import { getProducts } from '../../mock/data'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
const ItemListConteiner = () => {

  const [productos, setProductos] = useState([])
  const { id } = useParams()
  
  useEffect(() => {
    getProducts()
      .then((res) => {
        if (id) {
          setProductos(res.filter((prod) => prod.categoria === id))
        } else {
          setProductos(res)
        }
      })
  }, [id])

  return (
    <>
      <ItemList productos={productos} />
    </>
  )

}

export default ItemListConteiner