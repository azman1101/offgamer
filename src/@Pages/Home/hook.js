import { useState, useEffect } from 'react';
import p from './products.json';

export default ({ h }) => {
  console.log('🚀 vv ~ h carts', h.carts);
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  const getProduct = () => {
    setTimeout(setProducts(p.data), 300);
  }

  useEffect(() => {
    getProduct()
  }, []);

  useEffect(() => {
    setFilterProducts(
      search.length
        ? products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
        : products
    )
  }, [search, products]);

  const addToCart = (product) => {
    h.setCarts(carts => [...carts, product]);
  }

  return {
    products,
    filterProducts,
    search,
    setSearch,
    addToCart,
  }
}
