import { createContext, useState, useEffect } from 'react'
import {
  getCategoriesAndDocuments,
  addCollectionAndDocuments,
} from '../utils/firebase/firebase.utils.jsx'
import SHOP_DATA from '../shop-data.js'

export const CategoriesContext = createContext({
  categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})

  useEffect(() => {
    addCollectionAndDocuments('categories', SHOP_DATA)
  }, [])

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments()

      //this is where we are affecting state change.
      setCategoriesMap(categoriesMap)
    }
    getCategoriesMap()
  }, [])

  const value = { categoriesMap }

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}

//comments
