import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection, doc, getDocs, getDoc } from 'firebase/firestore'

export const useFirebase = () => {

    const [ productos, setProductos ] = useState([]);
    const { product, setProducto } = useState({});

    useEffect(() => {
        getProducts()

        return () => {

        }
    }, [])

    useEffect(() => {

    }, [productos])



    const getProducts = async () => {
        try {
            const prodCol = collection(db, 'productos')
            await getDocs(prodCol).then((snapshot) => {
                if (snapshot.size === 0) {
                    console.log("Base de datos esta vacio")
                }
                setProductos(snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }))
            })
        } catch (error) {

        }
    }

    const getProduct = async (id) => {
        try {
            const document = doc(db, 'productos', id)
            const response = await getDoc(document)
            response.data()
            setProducto({ id: response.id, ...response.data()})


        } catch (error) {

        }
    }

    return { productos, getProducts, getProduct, product }
}

export default useFirebase;