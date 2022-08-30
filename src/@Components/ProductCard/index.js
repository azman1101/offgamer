import ProductCard from './ProductCard';

export default ({ products, addToCart }) => {
  return (
    <div className='d-flex flex-wrap'>
      {products.map(product => <ProductCard product={product} addToCart={addToCart} />)}
    </div>
  )
}