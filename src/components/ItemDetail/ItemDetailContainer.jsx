import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFirebase from '../../hook/useFirebase'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

  const { id } = useParams();

  const { producto, getProduct } = useFirebase()

  useEffect(() => {
    getProduct(id)
  }, [id])

  return (
    <>
      <ItemDetail productos={producto} />
    </>
  )

}

export default ItemDetailContainer;