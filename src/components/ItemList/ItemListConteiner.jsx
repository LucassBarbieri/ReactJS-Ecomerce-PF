import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import useFirebase from '../../hook/useFirebase'
import Loading from '../..//components/Loading/Loading';

const ItemListConteiner = () => {
  const { getProducts, productos } = useFirebase()
  const { id } = useParams()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts(id)
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
        <ItemList productos={productos} />
      </>
    )
  }
}

export default ItemListConteiner;