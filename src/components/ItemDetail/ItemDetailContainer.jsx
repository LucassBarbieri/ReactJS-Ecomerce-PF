import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFirebase from '../../hook/useFirebase'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loading from '../..//components/Loading/Loading';

const ItemDetailContainer = () => {

  const { id } = useParams();
  const { producto, getProduct } = useFirebase()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProduct(id)
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [id])

  if (loading) {
    return (
      <Loading />
    )
  } else {
    return (
      <>
        <ItemDetail productos={producto} />
      </>
    )

  }
}

export default ItemDetailContainer;