import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFirebase from '../../hook/useFirebase'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

  const [product, getProduct] = useFirebase()
  const { id } = useParams()
  
  useEffect(() => {
    getProduct(id)
  }, [id])


  // const { id } = useParams();

  // const [productos, setProductos] = useState({})
  // useEffect(() => {
  //   getProducts().then((res) => setProductos(res.find(item => item.id === id)))
  // }, [id])

  return (
    <>
      <ItemDetail productos={product} />
    </>
  )

}

export default ItemDetailContainer;

