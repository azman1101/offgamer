import { useState, useEffect } from 'react';
import p from './products.json';

export default () => {
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
    console.log('🚀 vv ~ search', search);
    setFilterProducts(
      search.length
        ? products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
        : products
    )
  }, [search, products]);

  useEffect(() => {
    console.log('🚀 vv ~ filterProducts', filterProducts);
  }, [filterProducts]);

  return {
    products,
    filterProducts,
    search,
    setSearch,
  }
}
