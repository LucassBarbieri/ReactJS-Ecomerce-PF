// import { collection, doc, getDoc } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import { db } from '../../firebase'
import useFirebase from '../../hook/useFirebase'
// import { getProducts } from '../../mock/data'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

  const { id } = useParams();

  const {producto, getProduct} = useFirebase()
 
  useEffect(()=>{
    getProduct(id)
  }, [id])

  console.log(producto)
  return (
    <>
      <ItemDetail productos={producto} />
    </>
  )

}

export default ItemDetailContainer;