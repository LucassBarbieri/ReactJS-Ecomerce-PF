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

export default ItemListConteiner;



// import React, { useEffect } from 'react'
// // import { getProducts } from '../../mock/data'
// // import ItemList from '../ItemList/ItemList'
// // import { Link, useParams } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import useFirebase from '../../hook/useFirebase'

// const ItemListConteiner = () => {

//   // const [productos, setProductos] = useState([])
//   // const { id } = useParams()
  
//   const { productos } = useFirebase()

//   useEffect(()=> {

//   }, [productos])
  
//   // useEffect(() => {
//   //   getProducts()
//   //     .then((res) => {
//   //       if (id) {
//   //         setProductos(res.filter((prod) => prod.categoria === id))
//   //       } else {
//   //         setProductos(res)
//   //       }
//   //     })
//   // }, [id])

//   return (
//     <div>
//       <h1>Item list container</h1>
//       {productos.map (({id, titulo})=>   (
//         <Link to={`/item/${id}`}>
//           <h1>{titulo}</h1>
//         </Link>
//       ))}
//     </div>
//   )

// }

// export default ItemListConteiner