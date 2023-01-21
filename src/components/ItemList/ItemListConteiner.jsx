import React, { useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import useFirebase from '../../hook/useFirebase'

const ItemListConteiner = () => {
  const { getProducts, productos } = useFirebase()
  const { id } = useParams()

  useEffect(() => {

    getProducts(id)
  }, [id])

  return (
    <>
      <ItemList productos={productos} />
    </>
  )

}

export default ItemListConteiner;