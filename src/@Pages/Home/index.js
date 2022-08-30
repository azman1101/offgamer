import React from 'react';
import useHook from './hook';
import SearchBar from '@Components/SearchBar'
import ProductCard from '@Components/ProductCard'

export default function Home(props) {
  const h = useHook(props);

  return (
    <div className="container-lg">
      <SearchBar
        options={h.products.map(p => p.name)}
        value={h.search}
        setValue={h.setSearch}
      />
      <ProductCard
        products={h.filterProducts}
        addToCart={h.addToCart}
      />
    </div>
  );
};
