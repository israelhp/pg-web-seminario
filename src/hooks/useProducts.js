import { useCallback } from 'react'
import productService from '../services/products'

const useProducts = () => {
  const getProducts = useCallback(async () => {
    const data = await productService.getProducts().then(res => {
      return res.data.data
    })
    return data
  })

  return {
    getProducts,
  }
}

export default useProducts
